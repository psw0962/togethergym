import supabase from '@/config/supabaseClient';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@/component/common/button';
import Font from '@/component/common/font';
import useLocalStorage from 'node_modules/use-local-storage/dist/index';
import handleTimerFlagSB from '@/function/handleTimerFlagSB';
import {
  useGetFlagData,
  usePatchFlagData,
  usePatchFlagTimerData,
} from '@/api/flag';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRouter } from 'node_modules/next/router';
// import InitTimer from '@/constant/init-timer';

const ControlComponentSB = () => {
  const router = useRouter();

  const [flag, setFlag] = useLocalStorage('flag');
  const [audio, setAudio] = useState();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { data, refetch } = useGetFlagData();
  const { mutate } = usePatchFlagData(setToastState, router);
  const { mutate: timerMutate } = usePatchFlagTimerData();

  useEffect(() => {
    setAudio(new Audio('/sounds/beep.mp3'));

    const subscription = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'flag' },
        payload => {
          handleTimerFlagSB(payload.new.timer_method, setFlag);

          refetch();
        },
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
              checked={(data && data[0]?.timer_method === 'basicTimer') || ''}
              onChange={() => {
                mutate({ type: 'timerMethod', newValue: 'basicTimer' });
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
              checked={(data && data[0]?.timer_method === 'descentTimer') || ''}
              onChange={() => {
                mutate({ type: 'timerMethod', newValue: 'descentTimer' });
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
            mutate({ type: 'playProgram', newValue: true });
            audio?.play();
          }}
        >
          <Font fontSize="2.5rem">START</Font>
        </Button>

        <Button
          height="8rem"
          size="large"
          color="black"
          onClick={() => {
            mutate({ type: 'playProgram', newValue: false });

            // if (data && data[0]?.timer_method === 'basicTimer') {
            //   timerMutate(InitTimer('basicTimer'));
            //   return;
            // }

            // if (data && data[0]?.timer_method === 'descentTimer') {
            //   timerMutate(InitTimer('descentTimer'));
            //   return;
            // }
          }}
        >
          <Font fontSize="2.5rem">RESET</Font>
        </Button>
      </Frame>
    </Container>
  );
};

export default ControlComponentSB;

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
