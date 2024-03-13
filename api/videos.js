import supabase from '@/config/supabaseClient';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';

const URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/videos/`;

// =========================================
// ============== patch upload videos
// =========================================
const patchUploadVideosData = async patchData => {
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if ((user.email === 'togethergym1@togethergym.com') === false)
    return alert('권한이 없습니다. 관리자에게 문의해 주세요.');

  for (let i = 0; i < patchData.event.target.files.length; i++) {
    const { data, error } = await supabase.storage
      .from('videos')
      .upload(
        `${patchData.event.target.files[i].name}${uuidv4()}`,
        patchData.event.target.files[i],
        {
          cacheControl: '3600',
          upsert: false,
        },
      );

    if (error) throw new Error(error);

    await supabase
      .from('videos')
      .insert([{ id: data.id, url: `${URL}${data.path}` }])
      .select();
  }

  if (getUserError) throw new Error(getUserError);

  return;
};

export const usePatchUploadVideosData = (setToastState, router) => {
  const queryClient = useQueryClient();

  return useMutation(patchData => patchUploadVideosData(patchData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
      alert('업로드가 완료되었습니다.');
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
// ============== get videos data
// =========================================
const getVideosData = async (debouncedSearchKeyWord, category) => {
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  let query = supabase.from('videos').select();

  if (debouncedSearchKeyWord !== '')
    query = query.eq('index', Number(debouncedSearchKeyWord));

  if (category !== '') {
    query = query.eq('category', category);
  }

  const { data: videos, error: getVideosError } = await query;

  if (getUserError) throw new Error(getUserError);
  if (getVideosError) throw new Error(getVideosError);

  videos.sort((a, b) => a.index - b.index);
  return videos;
};

export const useGetVideosData = (
  setToastState,
  router,
  debouncedSearchKeyWord,
  category,
) => {
  return useQuery(
    ['videos', debouncedSearchKeyWord, category],
    () => getVideosData(debouncedSearchKeyWord, category),
    {
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
    },
  );
};

// =========================================
// ============== patch videos data
// =========================================
const patchVideosData = async patchData => {
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if ((user.email === 'togethergym1@togethergym.com') === false)
    return alert('권한이 없습니다. 관리자에게 문의해 주세요.');

  const { error: patchVideosError } = await supabase
    .from('videos')
    .update({ category: patchData.event.target.value })
    .eq('id', patchData.data.id)
    .select();

  if (getUserError) throw new Error(getUserError);
  if (patchVideosError) throw new Error(patchVideosError);

  return;
};

export const usePatchVideosData = (setToastState, router) => {
  const queryClient = useQueryClient();

  return useMutation(patchData => patchVideosData(patchData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
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
// ============== delete videos data
// =========================================
const deleteVideosData = async patchData => {
  const {
    data: { user },
    error: getUserError,
  } = await supabase.auth.getUser();

  if ((user.email === 'togethergym1@togethergym.com') === false)
    return alert('권한이 없습니다. 관리자에게 문의해 주세요.');

  const { error: tableError } = await supabase
    .from('videos')
    .delete()
    .eq('id', patchData.data.id);

  const { error: storageError } = await supabase.storage
    .from('videos')
    .remove([patchData.data.url.split('videos/')[1]]);

  if (getUserError) throw new Error(getUserError);
  if (tableError) throw new Error(tableError);
  if (storageError) throw new Error(storageError);

  return;
};

export const useDeleteVideosData = (setToastState, router) => {
  const queryClient = useQueryClient();

  return useMutation(patchData => deleteVideosData(patchData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['videos']);
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
