import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentProgramStateAtom } from 'atoms/index';
import { db } from 'utils/firebase';
import Font from '@/component/common/font';
import styled from 'styled-components';

const Today = () => {
  const [currentProgramState, setCurrentProgramState] = useRecoilState(
    currentProgramStateAtom,
  );

  // 새로고침 및 최초진입 시 프로그램 셋팅
  useEffect(() => {
    const getPrograms = async () => {
      const snapshot = await db?.collection('together_current').get();
      const documents = snapshot?.docs[0].data().data;

      setCurrentProgramState(documents);
    };

    getPrograms();
  }, []);

  return (
    <Frame>
      <Font fontSize="4.5rem" fontWeight={500} margin="4rem 0 4rem 0">
        오늘의 운동 🏋️‍♀️
      </Font>

      {currentProgramState?.length > 0 ? (
        <SelectedBox>
          {currentProgramState?.map((x, index) => {
            return (
              <div key={x?.id}>
                <Font fontSize="4rem">{index + 1}</Font>

                <CardWrapper>
                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width="100"
                    height="100"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    playsInline
                  ></video>

                  <Font fontSize="2.5rem" fontWeight="500" margin="20px 0">
                    {x.name}
                  </Font>
                </CardWrapper>
              </div>
            );
          })}
        </SelectedBox>
      ) : (
        <NoContents>
          <Font fontSize="4rem">오늘의 운동이 없습니다.</Font>
        </NoContents>
      )}
    </Frame>
  );
};

export default Today;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectedBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 80%;
  padding: 4rem;
  border: 1px solid #000;
  border-radius: 20px;

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const NoContents = styled.div`
  width: 80%;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 1px solid #000;
  border-radius: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
`;
