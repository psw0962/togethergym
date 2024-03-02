import supabase from '@/config/supabaseClient';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// =========================================
// ============== get flag data
// =========================================
const getFlagData = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from('flag')
    .select('*')
    .eq('user_id', user.id);

  if (error) throw new Error(error);

  return data;
};

export const useGetFlagData = () => {
  return useQuery(['flagData'], () => getFlagData(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: true,
    staleTime: 1000 * 60 * 5,

    onError: () => {
      // alert('네트워크 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.');
    },
  });
};

// =========================================
// ============== patch flag data
// =========================================
const patchFlagData = async patchData => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (patchData?.type === 'timerMethod') {
    const { error } = await supabase
      .from('flag')
      .update({ timer_method: patchData?.newValue })
      .eq('user_id', user?.id)
      .select();

    if (error) throw new Error(error);

    return;
  }

  if (patchData?.type === 'playProgram') {
    const { error } = await supabase
      .from('flag')
      .update({ play_program: patchData?.newValue })
      .eq('user_id', user?.id)
      .select();

    if (error) throw new Error(error);

    return;
  }
};

export const usePatchFlagData = (setToastState, router) => {
  const queryClient = useQueryClient();

  return useMutation(patchData => patchFlagData(patchData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['flagData']);
    },

    onError: error => {
      console.log(error);
      setToastState({
        isOpen: true,
        value: '로그인 후 이용해 주세요.',
      });
      router.push('/auth/sign-in');
    },
  });
};
