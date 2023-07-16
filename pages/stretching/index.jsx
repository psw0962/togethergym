import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';
import { db } from 'utils/firebase';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import { useRouter } from 'node_modules/next/router';
import Button from '@/component/common/button';
import styled from 'styled-components';
import Font from '@/component/common/font';
import { realTimeDB } from 'utils/firebase';

const Stretching = () => {
  const router = useRouter();
  const [element, setElement] = useState(null);
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );
  const [stretchingState, setStretchingState] =
    useLocalStorage('stretchingState');

  useEffect(() => {
    const getPrograms = async () => {
      const snapshot = await db?.collection('together_stretching').get();
      const documents = snapshot?.docs[0].data().data;

      setCurrentProgramState(documents);
    };

    getPrograms();

    setElement(true);
  }, []);

  useEffect(() => {
    if (stretchingState?.isTrue === false) {
      router.back();
    }
  }, [stretchingState]);

  const updateFlagValue = newValue => {
    const flagRef = realTimeDB.ref('/flag');

    flagRef
      .set(newValue)
      .then(() => {
        console.log('Flag value updated successfully');
      })
      .catch(error => {
        console.error('Error updating flag value:', error);
      });
  };

  if (!element) {
    return <></>;
  }

  return (
    <>
      <Wrapper>
        <div style={{ width: '35rem' }}></div>

        <div style={{ display: 'flex', gap: '3rem' }}>
          <SectionButton
            fontSize="4rem"
            active={stretchingState.section === 1}
            onClick={() => {
              setStretchingState(prev => {
                return {
                  ...prev,
                  section: 1,
                };
              });
            }}
          >
            section1
          </SectionButton>

          <SectionButton
            fontSize="4rem"
            active={stretchingState.section === 2}
            onClick={() => {
              setStretchingState(prev => {
                return {
                  ...prev,
                  section: 2,
                };
              });
            }}
          >
            section2
          </SectionButton>
        </div>

        <Button
          width="30rem"
          height="10rem"
          fontSize="2.5rem"
          color="black"
          type="button"
          onClick={() => {
            setStretchingState(() => {
              return { isTrue: false, section: 1 };
            });
            updateFlagValue('ready');
          }}
        >
          뒤로가기
        </Button>
      </Wrapper>

      {stretchingState.section === 1 && (
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
      )}

      {stretchingState.section === 2 && (
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
      )}
    </>
  );
};

export default Stretching;

const SectionButton = styled(Font)`
  padding: 2rem;
  border-radius: 20px;
  border: ${props => (props.active ? '3px solid #000' : '')};
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5rem 2rem;
`;
