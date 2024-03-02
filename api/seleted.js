import supabase from '@/config/supabaseClient';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// =========================================
// ============== get selected data
// =========================================
const getSeletedData = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from('selected')
    .select('*')
    .eq('user_id', user.id);

  if (error) throw new Error(error);

  return data;
};

export const useGetSeletedData = (setToastState, router) => {
  return useQuery(['seleted'], () => getSeletedData(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: true,
    staleTime: 1000 * 60 * 5,

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

// =========================================
// ============== get selected data today
// =========================================
const getSeletedDataToday = async center => {
  const makeUserId = () => {
    if (center === '고잔점') return 'b29c168e-4a78-4f44-a099-fc311abd3020';
  };

  const { data, error } = await supabase
    .from('selected')
    .select('*')
    .eq('user_id', makeUserId());

  if (error) throw new Error(error);

  return data;
};

export const useGetSeletedDataToday = center => {
  return useQuery(['seletedToday', center], () => getSeletedDataToday(center), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    enabled: true,
    staleTime: 1000 * 60 * 5,

    onError: error => {
      console.log(error);
    },
  });
};

// =========================================
// ============== patch selected data
// =========================================
const patchSelectedData = async patchData => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (patchData.type === 'previous') {
    await supabase
      .from('selected')
      .update({ previous: patchData.data })
      .eq('user_id', user?.id)
      .select();

    if (error) throw new Error(error);

    return;
  }

  if (patchData.type === 'current') {
    await supabase
      .from('selected')
      .update({ current: patchData.data })
      .eq('user_id', user?.id)
      .select();

    if (error) throw new Error(error);

    return;
  }

  return;
};

export const usePatchSelectedData = (setToastState, router) => {
  const queryClient = useQueryClient();

  return useMutation(patchData => patchSelectedData(patchData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['seleted']);
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

// =========================================
// ============== delete selected data
// =========================================
const deleteSelectedData = async patchData => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  await supabase
    .from('selected')
    .update({ previous: patchData })
    .eq('user_id', user?.id)
    .select();

  if (error) throw new Error(error);

  return;
};

export const useDeleteSelectedData = (setToastState, router) => {
  const queryClient = useQueryClient();

  return useMutation(patchData => deleteSelectedData(patchData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['seleted']);
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
