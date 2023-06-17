import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';
import { db } from 'utils/firebase';
import styled from 'styled-components';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import Button from '@/component/common/button';
import dynamic from 'next/dynamic';

const NumberTimer = dynamic(() =>
  import('@/component/exercise/number/NumberTimer'),
);

const FirstProgram = () => {
  const [element, setElement] = useState(null);
  const [audio, setAudio] = useState();
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );
  const [flag, setFlag] = useLocalStorage('flag');
  const [playProgram, setPlayProgram] = useLocalStorage('playProgram', false);

  // 새로고침 및 최초진입 시 프로그램 셋팅!
  useEffect(() => {
    setPlayProgram(false);
    setElement(true);
    setFlag({
      flagNumber: 72,
      timer: 10,
      round: '1ROUND',
      current: '준비!',
      next: '1set',
    });

    const getPrograms = async () => {
      const snapshot = await db?.collection('together_current').get();
      const documents = snapshot?.docs[0].data().data;

      setCurrentProgramState(documents);
    };

    getPrograms();
  }, []);

  // 오디오 이펙트
  useEffect(() => {
    setAudio(new Audio('/sounds/beep.mp3'));

    if (flag?.timer <= 3) {
      audio?.play();
    }
  }, [flag?.timer]);

  if (!element) {
    return <></>;
  }

  return (
    <div>
      {playProgram === false && (
        <ButtonWrapper>
          <Button
            margin="10rem"
            fontSize="2.5rem"
            size="large"
            color="black"
            type="button"
            onClick={() => {
              audio.play();
              setPlayProgram(true);
            }}
          >
            프로그램 시작
          </Button>
        </ButtonWrapper>
      )}

      {playProgram && (
        <NumberTimer flag={flag} setFlag={setFlag} audio={audio} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {currentProgramState?.slice(0, 3).map((x, index) => {
          return (
            <React.Fragment key={x?.id}>
              {x.isRow ? (
                <video
                  src={x?.image}
                  poster="/png/logo.png"
                  width={650}
                  height={750}
                  loop={true}
                  autoPlay={true}
                  muted={true}
                ></video>
              ) : (
                <video
                  src={x?.image}
                  poster="/png/logo.png"
                  width={450}
                  height={750}
                  loop={true}
                  autoPlay={true}
                  muted={true}
                ></video>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FirstProgram;

const ButtonWrapper = styled.div`
  width: 50rem;
  height: 28rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
