import { useEffect } from 'react';
import ControlComponentSB from '@/component/common/control-sb';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';

const ControlSB = () => {
  const router = useRouter();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  // 로그인 여부 확인
  useEffect(() => {
    if (localStorage.getItem('sb-pickvaiiskvmynzynbcg-auth-token') === null) {
      router.push('/auth/sign-in');
      setToastState({
        isOpen: true,
        value: '로그인 후 이용해 주세요.',
      });

      return;
    }
  }, []);

  return (
    <>
      <ControlComponentSB />
    </>
  );
};

export default ControlSB;
