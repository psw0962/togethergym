import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '@/component/common/button';
import Font from '@/component/common/font';
import { realTimeDB } from 'utils/firebase';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import setFlagData from '@/function/setTimerFlag';

const ControlComponent = () => {
  const [playProgram, setPlayProgram] = useLocalStorage('playProgram', false);
  const [timerMethod, setTimerMethod] = useLocalStorage('timerMethod');
  const [flag, setFlag] = useLocalStorage('flag');

  // playProgram effect
  useEffect(() => {
    // 이벤트 리스너 등록
    const playProgramRef = realTimeDB?.ref('/playProgram');
    playProgramRef.on('value', snapshot => {
      const playProgramValue = snapshot.val();
      setPlayProgram(playProgramValue);
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      playProgramRef.off('value');
    };
  }, []);

  // // timerMethod effect
  useEffect(() => {
    // 이벤트 리스너 등록
    const timerMethodRef = realTimeDB?.ref('/timerMethod');
    timerMethodRef.on('value', snapshot => {
      const timerMethodValue = snapshot.val();
      setTimerMethod(timerMethodValue);
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      timerMethodRef.off('value');
    };
  }, []);

  const updatePlayProgramValue = newValue => {
    const playProgramRef = realTimeDB.ref('/playProgram');

    playProgramRef
      .set(newValue)
      .then(() => {
        console.log('updated successfully');
      })
      .catch(error => {
        console.error('Error updating value:', error);
      });
  };

  const updateTimerMethodValue = newValue => {
    const timerMethodRef = realTimeDB.ref('/timerMethod');

    timerMethodRef
      .set(newValue)
      .then(() => {
        console.log('updated successfully');
      })
      .catch(error => {
        console.error('Error updating value:', error);
      });
  };

  return (
    <Container>
      <Frame>
        <SearchFlagContainer>
          <SearchFlagWrapper>
            <input
              type="radio"
              id="basicTimer"
              name="timer"
              value="basicTimer"
              checked={timerMethod === 'basicTimer'}
              onChange={() => {
                updateTimerMethodValue('basicTimer');
                setFlagData(setFlag);
              }}
            />

            <SearchFlagLabel htmlFor="basicTimer">{`basicTimer`}</SearchFlagLabel>
          </SearchFlagWrapper>

          <SearchFlagWrapper>
            <input
              type="radio"
              id="descentTimer"
              name="timer"
              value="descentTimer"
              checked={timerMethod === 'descentTimer'}
              onChange={() => {
                updateTimerMethodValue('descentTimer');
                setFlagData(setFlag);
              }}
            />

            <SearchFlagLabel htmlFor="descentTimer">{`descentTimer`}</SearchFlagLabel>
          </SearchFlagWrapper>
        </SearchFlagContainer>

        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            updatePlayProgramValue(true);
          }}
        >
          <Font fontSize="2.5rem">START</Font>
        </Button>

        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            updatePlayProgramValue(false);
            setFlagData(setFlag);
          }}
        >
          <Font fontSize="2.5rem">RESET</Font>
        </Button>
      </Frame>
    </Container>
  );
};

export default ControlComponent;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 100vh;
`;

const Frame = styled.div`
  height: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: center;
`;

const SearchFlagContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin: 6rem 0 2rem 0;
`;

const SearchFlagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
`;

const SearchFlagLabel = styled.label`
  font-size: 2rem;
`;
