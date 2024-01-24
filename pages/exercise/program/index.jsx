import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';
import { db } from 'utils/firebase';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import dynamic from 'next/dynamic';
import Font from '@/component/common/font';
import Image from 'next/image';
import ImageWrapper from '@/component/common/image-wrapper';
import togetherlogo from '@/public/png/togetherlogo.png';
import ControlComponent from '@/component/common/control';
import { realTimeDB } from 'utils/firebase';
import styled from 'styled-components';
import setFlagData from '@/function/setFlagData';

const BasicTimer = dynamic(() => import('@/component/timer/BasicTimer'));
const DescentTimer = dynamic(() => import('@/component/timer/DescentTimer'));

const Program = () => {
  const [element, setElement] = useState(null);
  const [audio, setAudio] = useState();
  const [section, setSection] = useState();
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );
  const [flag, setFlag] = useLocalStorage('flag');
  const [playProgram, setPlayProgram] = useLocalStorage('playProgram', false);
  const [timerMethod, setTimerMethod] = useLocalStorage('timerMethod');

  // 새로고침 및 최초 진입 시 프로그램 셋팅!
  useEffect(() => {
    if (sessionStorage.getItem('section')) {
      setSection(sessionStorage.getItem('section'));
    }

    if (playProgram === false) {
      setFlagData(setFlag);
    }

    setElement(true);

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
    // 이벤트 리스너 등록
    const playProgramRef = realTimeDB?.ref('/playProgram');
    playProgramRef.on('value', snapshot => {
      const playProgramValue = snapshot.val();
      if (playProgramValue) {
        audio?.play();
      }
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      playProgramRef.off('value');
    };
  }, []);

  if (!element) {
    return <></>;
  }

  return (
    <Container>
      {playProgram === false && (
        <div style={{ marginBottom: '2rem' }}>
          {/* 라운드 선택 */}
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

            <Font color="#fff" fontSize="8rem">
              {section}
            </Font>
          </div>
        </div>
      )}

      {/* 타이머 */}
      {playProgram === true && timerMethod === 'basicTimer' && (
        <BasicTimer flag={flag} setFlag={setFlag} section={section} />
      )}

      {playProgram === true && timerMethod === 'descentTimer' && (
        <DescentTimer flag={flag} setFlag={setFlag} section={section} />
      )}

      {/* 운동 영상 */}
      {section === '1SECTION' && (
        <ExerciseVideoWrapper>
          {currentProgramState?.slice(0, 3).map((x, index) => {
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
          {currentProgramState?.slice(3, 6).map((x, index) => {
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
          {currentProgramState?.slice(6, 9).map((x, index) => {
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
        <ControlComponent />
      </div>
    </Container>
  );
};

export default Program;

const Container = styled.div`
  background-color: #000;
  padding: 3rem;
`;

const SearchFlagContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
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

const SearchFlagLabel = styled.label`
  font-size: 2rem;
`;

const RowVideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 650px;
  height: 350px;
  border: 4px solid #ad3132;
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 420px;
  height: 750px;
  border: 4px solid #ad3132;
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
