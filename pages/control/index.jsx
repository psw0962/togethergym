import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@/component/common/button';
import Font from '@/component/common/font';
import { realTimeDB } from 'utils/firebase';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';

const Control = () => {
  const [audio, setAudio] = useState();
  const [playProgram, setPlayProgram] = useLocalStorage('playProgram', false);
  const [flag, setFlag] = useLocalStorage('flag');
  const [stretchingState, setStretchingState] =
    useLocalStorage('stretchingState');

  useEffect(() => {
    setAudio(new Audio('/sounds/beep.mp3'));
  }, []);

  useEffect(() => {
    // 이벤트 리스너 등록
    const flagRef = realTimeDB?.ref('/flag');
    flagRef.on('value', snapshot => {
      const flagValue = snapshot.val();
      if (flagValue === 'stretching') {
        setStretchingState(prev => {
          return { ...prev, isTrue: true };
        });
      }

      if (flagValue === 'ready') {
        setStretchingState(prev => {
          return { ...prev, isTrue: false };
        });
      }
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      flagRef.off('value');
    };
  }, []);

  useEffect(() => {
    // 이벤트 리스너 등록
    const playProgramRef = realTimeDB?.ref('/playProgram');
    playProgramRef.on('value', snapshot => {
      const playProgramValue = snapshot.val();
      if (playProgramValue) {
        setPlayProgram(true);
      }

      if (playProgramValue === false) {
        setPlayProgram(false);
        setFlag({
          flagNumber: 72,
          timer: 10,
          round: '1ROUND',
          current: '준비!',
          next: '1set',
        });
      }
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      playProgramRef.off('value');
    };
  }, []);

  useEffect(() => {
    // 이벤트 리스너 등록
    const sectionRef = realTimeDB?.ref('/section');
    sectionRef.on('value', snapshot => {
      const sectionValue = snapshot.val();

      if (sectionValue === '1') {
        setStretchingState(prev => {
          return { ...prev, section: '1' };
        });
      }

      if (sectionValue === '2') {
        setStretchingState(prev => {
          return { ...prev, section: '2' };
        });
      }
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      sectionRef.off('value');
    };
  }, []);

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

  const updateSectionValue = newValue => {
    const sectionRef = realTimeDB.ref('/section');

    sectionRef
      .set(newValue)
      .then(() => {
        console.log('updated successfully');
      })
      .catch(error => {
        console.error('Error updating value:', error);
      });
  };

  return (
    <div style={{ width: '50%', margin: '0 auto', height: '100vh' }}>
      <Frame>
        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            updatePlayProgramValue(true);
            audio?.play();
          }}
        >
          <Font fontSize="2.5rem">START</Font>
        </Button>

        <Button
          height="8rem"
          padding="1.5rem"
          color="black"
          onClick={() => updateFlagValue('ready')}
        >
          <Font fontSize="2.5rem">READY</Font>
        </Button>

        <Button
          height="8rem"
          padding="1.5rem"
          color="black"
          onClick={() => updateFlagValue('stretching')}
        >
          <Font fontSize="2.5rem">STRETCHING</Font>
        </Button>

        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            updatePlayProgramValue(false);
          }}
        >
          <Font fontSize="2.5rem">RESET</Font>
        </Button>

        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            updateSectionValue('1');
          }}
        >
          <Font fontSize="2.5rem">SECTION1</Font>
        </Button>

        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            updateSectionValue('2');
          }}
        >
          <Font fontSize="2.5rem">SECTION2</Font>
        </Button>
      </Frame>
    </div>
  );
};

export default Control;

const Frame = styled.div`
  height: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  justify-content: center;
`;
