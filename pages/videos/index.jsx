import React, { useState } from 'react';
import { PROGRAM_CATEGORY } from '@/constant/program-category';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Button from '@/component/common/button';
import dynamic from 'next/dynamic';
import Font from '@/component/common/font';
import {
  useDeleteVideosData,
  useGetVideosData,
  usePatchVideosData,
} from '@/api/videos';
import DotSpinner from '@/component/common/dot-spinner';
import Line from '@/component/common/line';
import useDebounce from '@/hooks/useDebounce';

const ReactPaginate = dynamic(() => import('react-paginate'), {
  ssr: false,
});

const Videos = () => {
  const router = useRouter();
  const [category, setCategory] = useState('');
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const debouncedSearchKeyWord = useDebounce(searchKeyWord);

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { data: videos, isLoading: videosIsLoading } = useGetVideosData(
    setToastState,
    router,
    debouncedSearchKeyWord,
    category,
  );

  const { mutate: patchVideosDataMutate, isLoading: patchVideosDataIsLoading } =
    usePatchVideosData(setToastState, router);

  const {
    mutate: deleteVideosDataMutate,
    isLoading: deleteVideosDataIsLoading,
  } = useDeleteVideosData(setToastState, router);

  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(0);

  const endOffset = itemOffset + 4;
  const currentItems = videos?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(videos?.length / 4);

  const handlePageClick = event => {
    const newOffset = (event?.selected * 4) % videos?.length;
    setItemOffset(newOffset);
    setPage(event.selected);
  };

  return (
    <Frame>
      {/* 로딩 처리 */}
      {videosIsLoading ||
      patchVideosDataIsLoading ||
      deleteVideosDataIsLoading ? (
        <DotSpinner />
      ) : null}

      <SearchInputWrapper>
        <input
          type="text"
          value={searchKeyWord}
          placeholder="숫자로 운동영상을 검색해보세요"
          onChange={e => {
            setSearchKeyWord(e.target.value);
            setItemOffset(0);
          }}
        />

        <SearchSubmitBtn
          width="10rem"
          padding="15px 0"
          color="black"
          type="button"
          onClick={() => {
            setCategory('');
            setSearchKeyWord('');
            setPage(0);
            setItemOffset(0);
          }}
        >
          초기화
        </SearchSubmitBtn>
      </SearchInputWrapper>

      <ProgramCategoryWrapper>
        {PROGRAM_CATEGORY?.map((x, index) => {
          return (
            <React.Fragment key={index}>
              <Font
                fontSize="1.4rem"
                whiteSpace="nowrap"
                pointer={true}
                textDecoration="underline"
                onClick={() => {
                  setCategory(x);
                  setSearchKeyWord('');
                  setPage(0);
                  setItemOffset(0);
                }}
              >
                {x}
              </Font>
            </React.Fragment>
          );
        })}
      </ProgramCategoryWrapper>

      <Line margin="20px 0" width="100%" />

      {currentItems?.length === 0 && (
        <Font fontSize="1.6rem">검색 결과가 없습니다</Font>
      )}

      <VideoFrame>
        {currentItems &&
          currentItems.map(x => {
            return (
              <VideoWrapper key={x.id}>
                <Font fontSize="1.6rem">{x.index}</Font>

                <video
                  src={x.url || ''}
                  poster="/png/logo.png"
                  width="200"
                  height="200"
                  loop={true}
                  autoPlay={true}
                  muted={true}
                  preload="auto"
                  playsInline
                ></video>

                <select
                  id="category"
                  name="category"
                  defaultValue={x.category}
                  onChange={event => patchVideosDataMutate({ event, data: x })}
                >
                  {PROGRAM_CATEGORY.map(x => {
                    return (
                      <option key={x} value={x.category}>
                        {x}
                      </option>
                    );
                  })}
                </select>

                <Button
                  width="10rem"
                  padding="1rem 0"
                  color="black"
                  type="button"
                  onClick={() => deleteVideosDataMutate({ data: x })}
                >
                  삭제하기
                </Button>
              </VideoWrapper>
            );
          })}
      </VideoFrame>

      <ReactPaginate
        containerClassName={'pagination-ul'}
        pageClassName={'pagination-li'}
        activeClassName={'currentPage'}
        previousClassName={'pageLabel-btn'}
        nextClassName={'pageLabel-btn'}
        nextLabel={null}
        previousLabel={null}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        forcePage={page}
      />
    </Frame>
  );
};

export default Videos;

const Frame = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  // pagination
  .pagination-ul {
    display: flex;
    align-items: center;
    gap: 2rem;

    li {
      cursor: pointer;
      font-size: 2rem;
    }
  }

  .pagination-li {
    font-size: 2rem;
  }

  .currentPage {
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 10px;
  }

  .pageLabel-btn {
    font-size: 2rem;
  }
`;

const VideoFrame = styled.div`
  display: flex;
`;

const VideoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  width: 50%;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  input {
    width: 100%;
    padding-bottom: 0.5rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
  }
`;

const SearchSubmitBtn = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 0.5rem;
`;

const ProgramCategoryWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  border: 1px solid #cacaca;
  border-radius: 10px;
  padding: 1.5rem;
`;
