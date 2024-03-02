import supabase from '@/config/supabaseClient';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// =========================================
// ============== post sign in
// =========================================
const postSignIn = async data => {
  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) throw new Error(error);
};

export const usePostSignIn = (setToastState, router) => {
  return useMutation(data => postSignIn(data), {
    onSuccess: () => {
      setToastState({
        isOpen: true,
        value: '정상적으로 로그인 되었습니다.',
      });
      router.push('/');
    },

    onError: error => {
      console.log(error);
      setToastState({
        isOpen: true,
        value: '이메일 또는 비밀번호가 다릅니다.',
      });
    },
  });
};

// =========================================
// ============== post sign out
// =========================================
const postSignOut = async () => {
  const { error } = supabase.auth.signOut();

  if (error) throw new Error(error);
};

export const usePostSignOut = (setToastState, router) => {
  return useMutation(() => postSignOut(), {
    onSuccess: () => {
      setToastState({
        isOpen: true,
        value: '정상적으로 로그아웃 되었습니다.',
      });
      router.push('/auth/sign-in');
    },

    onError: error => {
      console.log(error);
      alert('네트워크 연결이 원활하지 않습니다. 잠시 후 다시 시도해 주세요.');
    },
  });
};

// =========================================
// ============== get user data
// =========================================
const getUserData = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error);

  return data;
};

export const useGetUserData = () => {
  return useQuery(['userData'], () => getUserData(), {
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
