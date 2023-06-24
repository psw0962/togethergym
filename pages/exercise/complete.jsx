import styled from 'styled-components';
import Font from '@/component/common/font';
import Button from '@/component/common/button';
import { useEffect, useState } from 'react';
import { useRouter } from 'node_modules/next/router';

const Complete = () => {
  const router = useRouter();
  const [goToReady, setGoToReady] = useState('goToReady', '');

  useEffect(() => {
    setGoToReady(180);
  }, []);

  useEffect(() => {
    if (goToReady > 0) {
      const timer = setTimeout(() => setGoToReady(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (goToReady === 0) {
      router.push('/exercise');
      return;
    }
  }, [goToReady]);

  return (
    <Frame>
      <Font fontSize="5rem">
        🥳 운동 프로그램이 종료되었습니다. 수고하셨습니다! 🎉
      </Font>

      <Font fontSize="5rem">
        오늘도 스스로를 위해 땀 흘린 당신에게 박수를 보냅니다 👏
      </Font>

      <Font fontSize="5rem">{`Let's Go Together!!👍`}</Font>

      {
        <Font fontSize="2rem" margin="30rem 0 0 0">
          {goToReady}초 후 준비 페이지로 이동합니다.
        </Font>
      }

      <div style={{ display: 'flex', justifyContent: 'center', width: '50%' }}>
        <Button
          width="40rem"
          height="10rem"
          fontSize="2.5rem"
          color="black"
          type="button"
          onClick={() => {
            router.push('/exercise');
          }}
        >
          뒤로가기
        </Button>
      </div>
    </Frame>
  );
};

export default Complete;

const Frame = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
