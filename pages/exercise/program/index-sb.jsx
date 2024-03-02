import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import dynamic from 'next/dynamic';
import Font from '@/component/common/font';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import togetherlogo from '@/public/png/togetherlogo.png';
import styled from 'styled-components';
import handleTimerFlagSB from '@/function/handleTimerFlagSB';
import { useGetFlagData } from '@/api/flag';
import { useGetSeletedData } from '@/api/seleted';
import ControlComponentSB from '@/component/common/control-sb';
import DotSpinner from '@/component/common/dot-spinner';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';

const BasicTimerSB = dynamic(() => import('@/component/timer/BasicTimerSB'));
const DescentTimerSB = dynamic(() =>
  import('@/component/timer/DescentTimerSB'),
);

const ProgramSB = () => {
  const router = useRouter();

  const [element, setElement] = useState(null);
  const [audio, setAudio] = useState();
  const [section, setSection] = useState(null);

  const [flag, setFlag] = useLocalStorage('flag');

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { data: selectedData, isLoading: selectedDataIsLoading } =
    useGetSeletedData(setToastState, router);

  const { data: flagData, isLoading: flagDataIsLoading } = useGetFlagData();

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

  // 새로고침 및 최초 진입 시 프로그램 셋팅
  useEffect(() => {
    if (sessionStorage.getItem('section')) {
      setSection(sessionStorage.getItem('section'));
    }

    if (flagData && flagData[0]?.play_program === false) {
      handleTimerFlagSB(setFlag);
    }

    setElement(true);
  }, []);

  // 오디오 이펙트
  useEffect(() => {
    setAudio(new Audio('/sounds/beep.mp3'));

    if (flag?.timer <= 3) {
      audio?.play();
    }
  }, [flag?.timer]);

  // 오디오 이펙트 mutate로 할때
  // useEffect(() => {
  //   setAudio(new Audio('/sounds/beep.mp3'));

  //   if (flagData && flagData[0]?.timer <= 3) {
  //     audio?.play();
  //   }
  // }, [flagData]);

  if (!element) {
    return <></>;
  }

  return (
    <Container>
      {/* 로딩 처리 */}
      {selectedDataIsLoading || flagDataIsLoading ? <DotSpinner /> : null}

      {/* 라운드선택, 현황판 */}
      {flagData && flagData[0]?.play_program === false && (
        <div className="sectionWrapper">
          <div>
            <SearchFlagContainer>
              <SearchFlagWrapper>
                <input
                  type="radio"
                  id="1SECTION"
                  name="section"
                  value="1SECTION"
                  checked={section === '1SECTION'}
                  onChange={() => {
                    sessionStorage.setItem('section', '1SECTION'),
                      setSection(sessionStorage.getItem('section'));
                  }}
                />

                <SearchFlagLabel htmlFor="1SECTION">{`1SECTION`}</SearchFlagLabel>
              </SearchFlagWrapper>

              <SearchFlagWrapper>
                <input
                  type="radio"
                  id="2SECTION"
                  name="section"
                  value="2SECTION"
                  checked={section === '2SECTION'}
                  onChange={() => {
                    sessionStorage.setItem('section', '2SECTION'),
                      setSection(sessionStorage.getItem('section'));
                  }}
                />

                <SearchFlagLabel htmlFor="2SECTION">{`2SECTION`}</SearchFlagLabel>
              </SearchFlagWrapper>

              <SearchFlagWrapper>
                <input
                  type="radio"
                  id="3SECTION"
                  name="section"
                  value="3SECTION"
                  checked={section === '3SECTION'}
                  onChange={() => {
                    sessionStorage.setItem('section', '3SECTION'),
                      setSection(sessionStorage.getItem('section'));
                  }}
                />

                <SearchFlagLabel htmlFor="3SECTION">{`3SECTION`}</SearchFlagLabel>
              </SearchFlagWrapper>
            </SearchFlagContainer>
          </div>

          <div className="timerFlagWrapper">
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

            <Font color="#fff" fontSize="8rem">
              {section}
            </Font>
          </div>
        </div>
      )}

      {/* 타이머 */}
      {flagData &&
        flagData[0]?.play_program === true &&
        flagData[0]?.timer_method === 'basicTimer' && (
          <BasicTimerSB flag={flag} setFlag={setFlag} section={section} />
        )}

      {flagData &&
        flagData[0]?.play_program === true &&
        flagData[0]?.timer_method === 'descentTimer' && (
          <DescentTimerSB flag={flag} setFlag={setFlag} section={section} />
        )}

      {/* 운동 영상 */}
      {section === null && (
        <ChooseWrapper>
          <Font color="#fff" fontSize="4rem">
            👆
          </Font>

          <Font color="#fff" fontSize="4rem">
            SECTION을 선택해주세요
          </Font>
        </ChooseWrapper>
      )}

      {section === '1SECTION' && (
        <ExerciseVideoWrapper>
          {selectedData &&
            selectedData[0].current?.slice(0, 3).map(x => {
              return (
                <React.Fragment key={x?.id}>
                  {x.isRow ? (
                    <RowVideoWrapper>
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
                    </RowVideoWrapper>
                  ) : (
                    <ColumnVideoWrapper>
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
                    </ColumnVideoWrapper>
                  )}
                </React.Fragment>
              );
            })}
        </ExerciseVideoWrapper>
      )}

      {section === '2SECTION' && (
        <ExerciseVideoWrapper>
          {selectedData &&
            selectedData[0].current?.slice(3, 6).map(x => {
              return (
                <React.Fragment key={x?.id}>
                  {x.isRow ? (
                    <RowVideoWrapper>
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
                    </RowVideoWrapper>
                  ) : (
                    <ColumnVideoWrapper>
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
                    </ColumnVideoWrapper>
                  )}
                </React.Fragment>
              );
            })}
        </ExerciseVideoWrapper>
      )}

      {section === '3SECTION' && (
        <ExerciseVideoWrapper>
          {selectedData &&
            selectedData[0].current?.slice(6, 9).map(x => {
              return (
                <React.Fragment key={x?.id}>
                  {x.isRow ? (
                    <RowVideoWrapper>
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
                    </RowVideoWrapper>
                  ) : (
                    <ColumnVideoWrapper>
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
                    </ColumnVideoWrapper>
                  )}
                </React.Fragment>
              );
            })}
        </ExerciseVideoWrapper>
      )}

      <div style={{ visibility: 'hidden' }}>
        <ControlComponentSB />
      </div>
    </Container>
  );
};

export default ProgramSB;

const Container = styled.div`
  background-color: #000;
  padding: 3rem;

  .sectionWrapper {
    margin-bottom: 3rem;
  }

  .timerFlagWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4rem;
    padding: 0 1.5rem;
  }
`;

const SearchFlagContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3.5rem;
  justify-content: center;
`;

const SearchFlagLabel = styled.label`
  font-size: 3rem;
  transform: translateY(3px);
`;

const SearchFlagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  white-space: nowrap;
  color: #fff;
`;

const ExerciseVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RowVideoWrapper = styled.div`
  @keyframes neon {
    0%,
    100% {
      box-shadow: 0 0 0.5vw #1e4488, 0 0 0.5vw #1e4488, 0 0 5vw #272424,
        0 0 5vw #1e4488, 0 0 0.2vw #fed128, 0.3vw 0.3vw 0.1vw #806914;
      color: #fed128;
    }
    50% {
      box-shadow: 0 0 0.2vw #1e4488, 0 0 0.5vw #1e4488, 0 0 2vw #1e4488,
        0 0 2vw #1e4488, 0 0 0.1vw #1e4488, 0.3vw 0.3vw 0.1vw #40340a;
      color: #806914;
    }
  }

  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 650px;
  height: 350px;
  border: 4px solid #1e4488;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  video {
    position: relative;
    left: 0;
    top: 0;
    opacity: 1;
  }
`;

const ColumnVideoWrapper = styled.div`
  @keyframes neon {
    0%,
    100% {
      box-shadow: 0 0 0.5vw #1e4488, 0 0 0.5vw #1e4488, 0 0 5vw #272424,
        0 0 5vw #1e4488, 0 0 0.2vw #fed128, 0.3vw 0.3vw 0.1vw #806914;
      color: #fed128;
    }
    50% {
      box-shadow: 0 0 0.2vw #1e4488, 0 0 0.5vw #1e4488, 0 0 2vw #1e4488,
        0 0 2vw #1e4488, 0 0 0.1vw #1e4488, 0.3vw 0.3vw 0.1vw #40340a;
      color: #806914;
    }
  }

  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 420px;
  height: 750px;
  border: 4px solid #1e4488;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  video {
    position: relative;
    left: 0;
    top: 0;
    opacity: 1;
  }
`;

const ChooseWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;
