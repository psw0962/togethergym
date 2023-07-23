import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';
import Font from '@/component/common/font';
import Line from '@/component/common/line';
import Image from 'node_modules/next/image';
import Button from '@/component/common/button';
import programData from '@/constant/program';
import { useRecoilState } from 'recoil';
import { selectedProgramStateAtom } from 'atoms/index';
import ReactPaginate from 'react-paginate';
import useDebounce from '@/hooks/useDebounce';
import { check } from '@/public/svg';
import { db } from 'utils/firebase';
import { useRouter } from 'node_modules/next/router';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SEARCHKEYWORDEXAMPLE = [
  '맨몸운동',
  '덤벨',
  '스텝박스',
  '소프트박스',
  '슬램볼',
  '케틀벨',
  '불가리안백',
  '밴드',
  '바벨',
  '배틀로프',
  '보수볼',
  '플레이트',
  '사다리',
  '콘',
  '파트너',
  '로잉/스키',
  '슬레드',
];

const Select = () => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState(false);
  const [programs, setPrograms] = useState(programData || []);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [searchFlag, setSearchFlag] = useState('number');
  const [selectedProgramState, setSelectedProgramState] = useRecoilState(
    selectedProgramStateAtom,
  );

  console.log(selectedProgramState);

  const debouncedSearchKeyWord = useDebounce(searchKeyWord);

  const getPrograms = async () => {
    const snapshot = await db?.collection('together_selected').get();
    const documents = snapshot?.docs[0].data().data;

    setSelectedProgramState(documents);
  };

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

    const reorderedItems = Array.from(selectedProgramState);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);

    setSelectedProgramState(reorderedItems);
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

  // 새로고침 및 최초 진입 시 프로그램 셋팅
  useEffect(() => {
    getPrograms();
  }, []);

  const onClickAddProgram = x => {
    const checkDuplication = selectedProgramState?.find(y => y.id === x.id);
    if (checkDuplication !== undefined) {
      return alert('같은 운동 종목은 선택할 수 없습니다.');
    }

    const newObject = {
      data: [
        ...selectedProgramState,
        {
          id: x?.id,
          name: x?.name,
          image: x?.image,
          isRow: x?.isRow,
        },
      ],
    };

    const docRef = db?.collection('together_selected').doc('programs');
    const setNewObject = async () => {
      await docRef.set(newObject);
    };

    setNewObject();
    getPrograms();
  };

  const onClickDeleteProgram = async x => {
    const snapshot = await db?.collection('together_selected').get();
    const documents = snapshot?.docs[0].data().data;

    const deleteProgram = async () => {
      const updatedArray = documents.filter(item => item.id !== x.id);
      await db.collection('together_selected').doc('programs').update({
        data: updatedArray,
      });
    };

    deleteProgram();
    getPrograms();
  };

  const savePrograms = async () => {
    const save = async () => {
      await db.collection('together_current').doc('programs').update({
        data: selectedProgramState,
      });
    };

    const saveSelectedPrograms = async () => {
      await db.collection('together_selected').doc('programs').update({
        data: selectedProgramState,
      });
    };

    save();
    saveSelectedPrograms();
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

  const onClickSubmitPassword = password => {
    if (password === '890890') {
      return setCheckPassword(true);
    } else {
      return setCheckPassword(false);
    }
  };

  return (
    <>
      <CheckPasswordFrame active={checkPassword}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Font fontSize="2rem" whiteSpace="nowrap">
            비밀번호:{' '}
          </Font>

          <input
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                onClickSubmitPassword(password);
              }
            }}
          />

          <Button
            color="yellow"
            onClick={() => onClickSubmitPassword(password)}
          >
            submit
          </Button>
        </div>
      </CheckPasswordFrame>

      <Container>
        <ContainerWrapper>
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
                color="yellow"
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

          <SearchKeyWordExampleWrapper>
            <Font fontSize="1.4rem">검색 키워드 :</Font>

            {SEARCHKEYWORDEXAMPLE.map((x, index) => {
              return (
                <React.Fragment key={index}>
                  <Font
                    fontSize="1.4rem"
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
          </SearchKeyWordExampleWrapper>

          {currentItems?.length === 0 && (
            <Font fontSize="1.6rem">검색 결과가 없습니다</Font>
          )}

          <ProgramContainer>
            {currentItems?.map(x => {
              return (
                <CardWrapper key={x?.id}>
                  <SelectedCheck
                    active={selectedProgramState?.some(y => x.id === y.id)}
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
                    color="yellow"
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

            <Font fontSize="4.5rem" fontWeight={500} margin="0 0 2rem 0">
              선택한 프로그램
            </Font>

            {selectedProgramState?.length > 0 ? (
              <SelectedBox>
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="droppable" direction="horizontal">
                    {provided => (
                      <DragBox
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {selectedProgramState?.map((item, index) => (
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
                  </Droppable>
                </DragDropContext>
              </SelectedBox>
            ) : (
              <NoContents>
                <Font fontSize="4rem">선택한 프로그램이 없습니다</Font>
              </NoContents>
            )}

            {/* {selectedProgramState?.length > 0 ? (
              <SelectedBox>
                {selectedProgramState?.map((x, index) => {
                  return (
                    <div key={x?.id}>
                      <Font fontSize="4rem">{index + 1}</Font>
                      <CardWrapper>
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

                        <Font
                          fontSize="2.5rem"
                          fontWeight="500"
                          margin="20px 0"
                        >
                          {x.name}
                        </Font>

                        <Button
                          size="small"
                          color="black"
                          type="button"
                          onClick={() => {
                            onClickDeleteProgram(x);
                          }}
                        >
                          삭제하기
                        </Button>
                      </CardWrapper>
                    </div>
                  );
                })}
              </SelectedBox>
            ) : (
              <NoContents>
                <Font fontSize="4rem">선택한 프로그램이 없습니다</Font>
              </NoContents>
            )} */}

            <ButtonWrapper>
              <Button
                fontSize="2.5rem"
                size="large"
                color="black"
                type="button"
                onClick={() => {
                  savePrograms();
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

export default React.memo(Select);

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 3rem;

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
  width: 80%;
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
  width: 80%;
  padding: 4rem;
  border: 1px solid #000;
  border-radius: 10px;
`;

const SearchKeyWordExampleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0 4rem 0;
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

const CheckPasswordFrame = styled.div`
  display: ${props => (props.active ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff;
  z-index: 200;
`;

const ListItem = styled.li`
  display: flex;
  border: 1px solid #ddd;
  margin: 5px;
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
