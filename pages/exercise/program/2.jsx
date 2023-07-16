import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';
import { db } from 'utils/firebase';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import dynamic from 'next/dynamic';
import Font from '@/component/common/font';
import { useRouter } from 'node_modules/next/router';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import togetherlogo from '@/public/png/togetherlogo.png';

const NumberTimer = dynamic(() =>
  import('@/component/exercise/number/NumberTimer'),
);

const SecondProgram = () => {
  const router = useRouter();
  const [element, setElement] = useState(null);
  const [audio, setAudio] = useState();
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );
  const [flag, setFlag] = useLocalStorage('flag');
  const [playProgram, setPlayProgram] = useLocalStorage('playProgram', false);
  const [stretchingState, setStretchingState] =
    useLocalStorage('stretchingState');

  // 새로고침 및 최초 진입 시 프로그램 셋팅!
  useEffect(() => {
    setStretchingState({
      isTrue: false,
      section: '1',
    });
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

  useEffect(() => {
    if (stretchingState?.isTrue) {
      router.push('/stretching');
    }
  }, [stretchingState]);

  if (!element) {
    return <></>;
  }

  return (
    <div>
      {playProgram === false && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '4rem',
            padding: '0 1.5rem',
          }}
        >
          <ImageWrapper width={30} height={30}>
            <Image
              src={togetherlogo}
              alt="logo"
              priority={true}
              quality={80}
              placeholder="blur"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              width={180}
              height={200}
            />
          </ImageWrapper>

          <Font fontSize="8rem">{router?.pathname?.split('/')[3]}ROUND</Font>
        </div>
      )}

      {playProgram && (
        <NumberTimer flag={flag} setFlag={setFlag} audio={audio} />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {currentProgramState?.slice(3, 6).map((x, index) => {
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
                  playsInline
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
                  playsInline
                ></video>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SecondProgram;
