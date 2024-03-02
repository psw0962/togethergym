import React from 'react';
import Font from '@/component/common/font';
import styled from 'styled-components';
import { useGetSeletedData } from '@/api/seleted';
import DotSpinner from '@/component/common/dot-spinner';
import ImageWrapper from '@/component/common/image-wrapper';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRouter } from 'node_modules/next/router';

const TodaySB = () => {
  const router = useRouter();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { data, isLoading } = useGetSeletedData(setToastState, router);

  return (
    <Frame>
      {isLoading && <DotSpinner />}

      <Font fontSize="4.5rem" fontWeight={500} margin="4rem 0 4rem 0">
        오늘의 운동 🏋️‍♀️
      </Font>

      {data && data[0].current?.length > 0 ? (
        <SelectedBox>
          {data[0].current?.map((x, index) => {
            return (
              <SelectedBoxWrapper key={x?.id}>
                <IndexNumber fontSize="4rem">{index + 1}</IndexNumber>

                <CardWrapper>
                  <ImageWrapper width={20} height={20}>
                    <video
                      width="100%"
                      height="100%"
                      src={x?.image}
                      poster="/png/logo.png"
                      loop={true}
                      autoPlay={true}
                      muted={true}
                      preload="auto"
                      playsInline
                    ></video>
                  </ImageWrapper>

                  <Font fontSize="2.5rem" fontWeight="500">
                    {x.name}
                  </Font>
                </CardWrapper>
              </SelectedBoxWrapper>
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

export default TodaySB;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectedBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  gap: 2rem;

  width: 80%;
  padding: 4rem;
  border: 1px solid #000;
  border-radius: 20px;

  @media screen and (max-width: 1580px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const IndexNumber = styled(Font)`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const SelectedBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  padding: 3rem;
  border: 1px solid #ddd;
  border-radius: 5px;
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
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
