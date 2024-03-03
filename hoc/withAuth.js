import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useGetUserData } from '@/api/auth';

const withAuth = WrappedComponent => {
  const AuthComponent = props => {
    const router = useRouter();
    const [toastState, setToastState] = useRecoilState(toastStateAtom);

    const { data } = useGetUserData();

    useEffect(() => {
      if (!data) {
        router.push('/auth/sign-in');
        setToastState({
          isOpen: true,
          value: '로그인 후 이용해 주세요.',
        });
        return;
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
