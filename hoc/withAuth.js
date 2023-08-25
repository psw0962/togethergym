import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { auth } from 'utils/firebase';

const withAuth = WrappedComponent => {
  const AuthComponent = props => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth?.onAuthStateChanged(user => {
        if (!user) {
          alert('로그인이 필요합니다.');
          router.push('/auth/login');
        }
      });

      return () => unsubscribe();
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
