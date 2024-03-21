import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Image from 'node_modules/next/image';
import Button from '@/component/common/button';
import programData from '@/constant/program';
import useDebounce from '@/hooks/useDebounce';
import { check } from '@/public/svg';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '@/component/common/strict-mode-droppable';
import DotSpinner from '@/component/common/dot-spinner';
import dynamic from 'node_modules/next/dynamic';
import { PROGRAM_CATEGORY } from '@/constant/program-category';
import {
  useDeleteSelectedData,
  useGetSeletedData,
  usePatchSelectedData,
} from '@/api/seleted';
import { useRouter } from 'next/router';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import withAuth from '@/hoc/withAuth';

const ReactPaginate = dynamic(() => import('react-paginate'), {
  ssr: false,
});

const SelectSB = () => {
  const router = useRouter();

  const [programs, setPrograms] = useState(programData || []);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [searchFlag, setSearchFlag] = useState('number');
  const debouncedSearchKeyWord = useDebounce(searchKeyWord);

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { data: selectedData, isLoading: selectedDataIsLoading } =
    useGetSeletedData(setToastState, router);

  const {
    mutate: selectedPatchDataMutate,
    isLoading: selectedPatchDataMutateIsLoading,
  } = usePatchSelectedData(setToastState, router);

  const {
    mutate: selectedDeleteDataMutate,
    isLoading: selectedDeleteDataMutateIsLoading,
  } = useDeleteSelectedData(setToastState, router);

  const customProgramData = () => {
    const result = [];

    programData?.forEach(x => {
      result.push({
        id: x.id.toString(),
        name: `[${x.id}]${x.name}`,
        image: x.image,
        isRow: x.isRow,
      });
    });

    return result;
  };

  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const reorderedItems = [...selectedData[0].previous];
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    selectedPatchDataMutate({
      type: 'previous',
      data: reorderedItems,
    });
  };

  // 프로그램 검색
  useEffect(() => {
    if (debouncedSearchKeyWord === '') {
      return setPrograms(customProgramData());
    }

    const nameResult = customProgramData()?.filter(x => {
      return x.name.includes(debouncedSearchKeyWord);
    });

    const numberResult = customProgramData()?.filter(x => {
      return x.id.toString() === debouncedSearchKeyWord;
    });

    setPage(0);

    if (searchFlag === 'number') {
      return setPrograms(numberResult);
    }

    if (searchFlag === 'name') {
      return setPrograms(nameResult);
    }
  }, [debouncedSearchKeyWord]);

  const onClickAddProgram = async x => {
    const checkDuplication = await selectedData[0].previous?.find(
      y => y.id === x.id,
    );

    if (checkDuplication !== undefined) {
      return alert('같은 운동 종목은 선택할 수 없습니다.');
    }

    const newObject = [
      ...selectedData[0].previous,
      {
        id: x?.id,
        name: x?.name,
        image: x?.image,
        isRow: x?.isRow,
      },
    ];

    await selectedPatchDataMutate({
      type: 'previous',
      data: newObject,
    });
  };

  const onClickDeleteProgram = async x => {
    const updatedArray = await selectedData[0].previous?.filter(
      item => item.id !== x.id,
    );

    selectedDeleteDataMutate(updatedArray);
  };

  const savePrograms = async data => {
    await selectedPatchDataMutate({
      type: 'current',
      data,
    });
  };

  // pagination
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(0);

  const endOffset = itemOffset + 4;
  const currentItems = programs?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(programs?.length / 4);

  const handlePageClick = event => {
    const newOffset = (event?.selected * 4) % programs?.length;
    setItemOffset(newOffset);
    setPage(event.selected);
  };

  return (
    <>
      <Container>
        {/* 로딩 처리 */}
        {selectedDataIsLoading ||
        selectedPatchDataMutateIsLoading ||
        selectedDeleteDataMutateIsLoading ? (
          <DotSpinner />
        ) : null}

        <ContainerWrapper>
          {/* 프로그램 선택 */}
          <Font fontSize="4.5rem" fontWeight={500}>
            프로그램 선택하기
          </Font>

          <SearchFlagContainer>
            <SearchFlagWrapper>
              <input
                type="radio"
                id="number"
                name="search"
                value="number"
                checked={searchFlag === 'number'}
                onChange={e => {
                  setSearchFlag(e.target.value);
                  setSearchKeyWord('');
                }}
              />
              <SearchFlagLabel htmlFor="number">숫자로 찾기</SearchFlagLabel>
            </SearchFlagWrapper>

            <SearchFlagWrapper>
              <input
                type="radio"
                id="name"
                name="search"
                value="name"
                checked={searchFlag === 'name'}
                onChange={e => {
                  setSearchFlag(e.target.value);
                  setSearchKeyWord('');
                }}
              />
              <SearchFlagLabel htmlFor="name">이름으로 찾기</SearchFlagLabel>
            </SearchFlagWrapper>
          </SearchFlagContainer>

          <SearchInputWrapper>
            <div style={{ whiteSpace: 'nowrap' }}>
              <Font fontSize="2rem" fontWeight="500">
                검색
              </Font>
            </div>

            <input
              type="text"
              value={searchKeyWord}
              onChange={e => {
                setSearchKeyWord(e.target.value);
                setItemOffset(0);
              }}
            />

            <div style={{ width: '8rem' }}>
              <Button
                size="small"
                color="blue"
                type="button"
                onClick={() => {
                  setSearchFlag('number');
                  setSearchKeyWord('');
                  setPage(0);
                  setItemOffset(0);
                }}
              >
                초기화
              </Button>
            </div>
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
                      setSearchKeyWord(x);
                      setSearchFlag('name');
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

          {currentItems?.length === 0 && (
            <Font fontSize="1.6rem">검색 결과가 없습니다</Font>
          )}

          <ProgramContainer>
            {currentItems?.map(x => {
              return (
                <CardWrapper key={x?.id}>
                  <SelectedCheck
                    active={selectedData?.some(y => x.id === y.id)}
                  >
                    <Image src={check} alt="check" />
                  </SelectedCheck>

                  <video
                    src={x?.image}
                    poster="/png/logo.png"
                    width="200"
                    height="200"
                    loop={true}
                    autoPlay={true}
                    muted={true}
                    preload="auto"
                    playsInline
                  ></video>

                  <Font fontSize="2.5rem" fontWeight="500" margin="20px 0">
                    {x.name}
                  </Font>

                  <Button
                    width="15rem"
                    height="6rem"
                    color="blue"
                    type="button"
                    onClick={() => {
                      onClickAddProgram(x);
                    }}
                  >
                    추가하기
                  </Button>
                </CardWrapper>
              );
            })}
          </ProgramContainer>

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

          <>
            <Line margin="40px 0" width="100%" />

            {/* 선택한 프로그램 */}
            <Font fontSize="4.5rem" fontWeight={500} margin="6rem 0 2rem 0">
              선택한 프로그램
            </Font>

            {selectedData && selectedData[0].previous?.length > 0 ? (
              <SelectedBox>
                <DragDropContext onDragEnd={onDragEnd}>
                  <StrictModeDroppable
                    droppableId="droppable"
                    direction="horizontal"
                  >
                    {provided => (
                      <DragBox
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {selectedData &&
                          selectedData[0].previous?.map((item, index) => (
                            <Draggable
                              key={item?.id}
                              draggableId={item?.id}
                              direction="horizontal"
                              index={index}
                            >
                              {provided => (
                                <ListItem
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                >
                                  <DragHandle {...provided.dragHandleProps}>
                                    <div key={item?.id}>
                                      <Font fontSize="4rem">{index + 1}</Font>
                                      <CardWrapper>
                                        <video
                                          src={item?.image}
                                          poster="/png/logo.png"
                                          width="200"
                                          height="200"
                                          loop={true}
                                          autoPlay={true}
                                          muted={true}
                                          preload="auto"
                                          playsInline
                                        ></video>

                                        <Font
                                          fontSize="2.5rem"
                                          fontWeight="500"
                                          margin="20px 0"
                                        >
                                          {item?.name}
                                        </Font>

                                        <Button
                                          size="small"
                                          color="black"
                                          type="button"
                                          onClick={() => {
                                            onClickDeleteProgram(item);
                                          }}
                                        >
                                          삭제하기
                                        </Button>
                                      </CardWrapper>
                                    </div>
                                  </DragHandle>
                                  {item?.content}
                                </ListItem>
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </DragBox>
                    )}
                  </StrictModeDroppable>
                </DragDropContext>
              </SelectedBox>
            ) : (
              <NoContents>
                <Font fontSize="4rem">선택한 프로그램이 없습니다</Font>
              </NoContents>
            )}

            <ButtonWrapper>
              <Button
                fontSize="2.5rem"
                size="large"
                color="blue"
                type="button"
                onClick={() => {
                  savePrograms(selectedData[0]?.previous);
                  alert('프로그램이 저장되었습니다.');
                }}
              >
                저장하기
              </Button>
            </ButtonWrapper>
          </>
        </ContainerWrapper>
      </Container>
    </>
  );
};

export default withAuth(SelectSB);

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 10rem 3rem;

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #acacac;
    border-radius: 5px;
    outline: none;
  }

  .program {
    border-radius: 20px !important;
  }

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

const ContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgramContainer = styled.div`
  width: 100%;
  min-height: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SelectedBox = styled.div`
  width: 100%;
  padding: 4rem;
  border: 1px solid #000;
  border-radius: 10px;
`;

const ProgramCategoryWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0 4rem 0;
  flex-wrap: wrap;
`;

const SelectedCheck = styled.div`
  width: 100%;
  display: ${props => (props.active ? 'flex' : 'none')};
  justify-content: flex-end;
  position: absolute;
  top: 0;
`;

const ButtonWrapper = styled.div`
  width: 50rem;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`;

const SearchInputWrapper = styled.div`
  width: 30%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
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
  gap: 1rem;
  white-space: nowrap;
`;

const SearchFlagLabel = styled.label`
  font-size: 2rem;
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

const ListItem = styled.li`
  display: flex;
  border: 1px solid #ddd;
  margin: 5px;
  padding: 2rem;
  background-color: ${props => (props.isDragging ? 'lightblue' : '#fff')};
`;

const DragHandle = styled.div`
  /* 드래그 핸들 스타일 */
  cursor: grab;
  padding: 4px;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`;

const DragBox = styled.div`
  display: flex;
  overflow: auto;
`;
