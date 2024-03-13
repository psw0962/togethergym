import styled from 'styled-components';
import Image from 'next/image';
import logo from '@/public/png/logo.png';
import { useRouter } from 'node_modules/next/router';
import ImageWrapper from '@/component/common/image-wrapper';
import { menu } from '@/public/svg';
import { useState, useEffect } from 'react';
import Modal from '@/component/common/modal';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { usePostSignOut } from '@/api/auth';
import useAuthCheck from '@/hooks/useAuthCheck';
import supabase from '@/config/supabaseClient';

const Navigation = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useAuthCheck();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { mutate } = usePostSignOut(setToastState);

  // 로그아웃 처리
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_OUT') {
          router.reload();
        }
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <Container>
      <Modal state={isMenuOpen} setState={setIsMenuOpen}>
        {isLoggedIn ? (
          <ModalMenuWrapper
            onClick={() => {
              mutate();
              setIsMenuOpen(false);

              e => e.stopPropagation();
            }}
          >
            {`로그아웃`}
          </ModalMenuWrapper>
        ) : (
          <ModalMenuWrapper
            onClick={() => {
              router.push('/auth/sign-in');
              setIsMenuOpen(false);
              e => e.stopPropagation();
            }}
          >
            {`로그인`}
          </ModalMenuWrapper>
        )}

        {isLoggedIn && (
          <ModalMenuWrapper
            onClick={() => {
              router.push('/exercise/program/index-sb');
              setIsMenuOpen(false);
              e => e.stopPropagation();
            }}
          >
            {`운동 프로그램`}
          </ModalMenuWrapper>
        )}

        {isLoggedIn && (
          <ModalMenuWrapper
            onClick={() => {
              router.push('/exercise/select-sb');
              setIsMenuOpen(false);
              e => e.stopPropagation();
            }}
          >
            {`운동 프로그램 선택`}
          </ModalMenuWrapper>
        )}

        {isLoggedIn && (
          <ModalMenuWrapper
            onClick={() => {
              router.push('/exercise/control-sb');
              setIsMenuOpen(false);
              e => e.stopPropagation();
            }}
          >
            {`프로그램 컨트롤러`}
          </ModalMenuWrapper>
        )}

        {isLoggedIn && (
          <ModalMenuWrapper
            onClick={() => {
              router.push('/videos');
              setIsMenuOpen(false);
              e => e.stopPropagation();
            }}
          >
            {`운동 영상 관리`}
          </ModalMenuWrapper>
        )}

        {isLoggedIn && (
          <ModalMenuWrapper
            onClick={() => {
              router.push('/videos/upload');
              setIsMenuOpen(false);
              e => e.stopPropagation();
            }}
          >
            {`운동 영상 업로드`}
          </ModalMenuWrapper>
        )}

        <ModalMenuWrapper
          onClick={() => {
            router.push('/exercise/index-sb');
            setIsMenuOpen(false);
            e => e.stopPropagation();
          }}
        >
          {`오늘의 운동`}
        </ModalMenuWrapper>

        <ModalMenuWrapper
          onClick={() => {
            window.open('https://www.togethergym.co.kr/contact', '_self');
            setIsMenuOpen(false);
            e => e.stopPropagation();
          }}
        >
          {`오시는 길`}
        </ModalMenuWrapper>
      </Modal>

      <Frame>
        <NavMainButton
          onClick={() =>
            window.open(
              'https://map.naver.com/v5/search/%ED%88%AC%EA%B2%8C%EB%8D%94%EC%A7%90/place/1616639182?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh',
            )
          }
        >
          <Pretag
            fontSize="1.5rem"
            textAlign="center"
            lineHeight="1.5"
          >{`2회 체험권
예약하기`}</Pretag>
        </NavMainButton>

        <ImageWrapper
          width={7}
          height={7}
          pointer="pointer"
          onClick={() => router.push('/')}
        >
          <CustomImage
            src={logo}
            alt="logo"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper>

        <ImageWrapper
          width={4}
          height={4}
          pointer="pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image
            src={menu}
            alt="menu"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </ImageWrapper>
      </Frame>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  position: sticky;
  top: 0px;
  z-index: 10;
  width: calc(100% + 3rem * 2);
  margin: 0px -3rem 0px -3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #fff;
`;

const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

const Pretag = styled.pre`
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.6rem')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : 0)};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  white-space: ${props => (props.whiteSpace ? props.whiteSpace : '')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 600)};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : ''};
  margin: ${({ margin }) => margin};
  cursor: ${props => (props.pointer ? 'pointer' : '')};
`;

const NavMainButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 1rem 1rem;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalMenuWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

const CustomImage = styled(Image)`
  border-radius: 10px;
`;
