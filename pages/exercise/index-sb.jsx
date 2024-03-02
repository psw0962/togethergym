import React, { useState } from 'react';
import Font from '@/component/common/font';
import styled from 'styled-components';
import { useGetSeletedDataToday } from '@/api/seleted';
import DotSpinner from '@/component/common/dot-spinner';
import ImageWrapper from '@/component/common/image-wrapper';

const TodaySB = () => {
  const [center, setCenter] = useState('고잔점');

  const { data, isLoading } = useGetSeletedDataToday(center);

  return (
    <Frame>
      {isLoading && <DotSpinner />}

      <Font fontSize="4.5rem" fontWeight={500} margin="4rem 0 4rem 0">
        오늘의 운동 🏋️‍♀️
      </Font>

      <SearchFlagContainer>
        <SearchFlagWrapper>
          <input
            type="radio"
            id="고잔점"
            name="gojan"
            value="고잔점"
            checked={center === '고잔점'}
            onChange={e => {
              setCenter(e.target.value);
            }}
          />

          <SearchFlagLabel htmlFor="고잔점">{`고잔점`}</SearchFlagLabel>
        </SearchFlagWrapper>
      </SearchFlagContainer>

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
  padding: 4rem 0rem 10rem 0rem;
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

const SearchFlagContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  gap: 3.5rem;
  justify-content: center;
`;

const SearchFlagLabel = styled.label`
  font-size: 3rem;
  color: #000;
  transform: translateY(3px);
`;

const SearchFlagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  white-space: nowrap;
  color: #fff;
`;
