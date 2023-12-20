import Font from '@/component/common/font';
import styled from 'styled-components';
import Image from 'next/image';
import main1 from '@/public/png/main1.png';
import main2 from '@/public/png/main2.jpeg';
import main3 from '@/public/png/main3.jpeg';
import main4 from '@/public/png/main4.jpeg';
import main6 from '@/public/png/main6.jpeg';
import main7 from '@/public/png/main7.jpeg';
import banner1 from '@/public/png/banner1.png';
import banner2 from '@/public/png/banner2.jpeg';
import instagram from '@/public/png/instagram.png';
import kakaotalk from '@/public/png/kakaotalk.png';
import logo from '@/public/png/logo.png';
import phone from '@/public/svg/phone.svg';
import Button from '@/component/common/button';
import { useRouter } from 'node_modules/next/router';

const Home = () => {
  const router = useRouter();

  return (
    <Frame>
      <Navigation>
        <LogoImage
          src={logo}
          alt="logo"
          width={100}
          height={100}
          onClick={() => router.push('/')}
        />
      </Navigation>

      <IframeWrapper>
        <iframe
          width="1905"
          height="775"
          src="https://www.youtube.com/embed/wy46l-rvzwE?autoplay=1&mute=1"
          title='"함께할수록, 운동은 재밌어집니다." - 안산 최초의 그룹 트레이닝 센터 투게더짐 리뷰'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </IframeWrapper>

      <Button
        size="large"
        color="black"
        margin="7rem 0 0 0"
        onClick={() =>
          window.open(
            'https://map.naver.com/v5/search/%ED%88%AC%EA%B2%8C%EB%8D%94%EC%A7%90/place/1616639182?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh',
          )
        }
      >
        <Font fontSize="2.5rem">2회 체험권 예약하기</Font>
      </Button>

      <IconFrame>
        <IconWrapper
          onClick={() =>
            window.open('https://www.instagram.com/togethergym_official/')
          }
        >
          <Image src={instagram} alt="instagram" width={30} height={30} />
          <Font fontSize="2.7rem">투게더 짐 인스타그램</Font>
        </IconWrapper>

        <IconWrapper onClick={() => window.open('http://pf.kakao.com/_nXyLxj')}>
          <Image src={kakaotalk} alt="kakaotalk" width={30} height={30} />
          <Font fontSize="2.7rem">카카오톡 상담하기</Font>
        </IconWrapper>

        <IconWrapper>
          <Image src={phone} alt="phone" width={30} height={30} />
          <a
            style={{ fontSize: '2.7rem', textDecoration: 'none' }}
            href={`tel:031-403-0776`}
          >
            전화문의
          </a>
        </IconWrapper>
      </IconFrame>

      <FontWrapper>
        <Font fontSize="5rem" margin="15rem 0 0 0">
          안녕하세요.
        </Font>
        <Font fontSize="5rem" margin="2rem 0 0 0">
          우리는 투게더 짐입니다.
        </Font>
      </FontWrapper>

      {/* ===== */}

      <CustomImage
        style={{ margin: '4rem 0 0 0' }}
        src={banner2}
        alt="banner2"
        priority={true}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />

      <Font fontSize="4rem" margin="4rem 0 0 0">
        - 힘들기만한 운동? NO👋 운동은 원래 즐거운거에요!
      </Font>
      <Font fontSize="4rem" margin="1.5rem 0 0 0">
        - 근육 운동 + 유산소 운동
      </Font>
      <Font fontSize="4rem" margin="1.5rem 0 0 0">
        - 전문 트레이너와 함께하는 부상 없는 트레이닝
      </Font>
      <Font fontSize="4rem" margin="1.5rem 0 0 0">
        - 운동의 재미를 찾아 스스로 운동할 수 있게 만드는데 목적이 있는 그룹
        운동!
      </Font>

      <CustomImage
        style={{ margin: '4rem 0 0 0' }}
        src={main6}
        alt="image6"
        priority={true}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />

      <CustomImage
        style={{ margin: '4rem 0 0 0' }}
        src={main7}
        alt="image7"
        priority={true}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />

      <Font fontSize="4rem" margin="15rem 0 0 0">
        투게더 짐은 PT전문 센터 남스짐에서 새롭게 런칭하는
      </Font>

      <Font fontSize="4rem" margin="2rem 0 0 0">
        팀 트레이닝 전문 센터 입니다.
      </Font>

      <Font fontSize="4rem" margin="2rem 0 6rem 0"></Font>

      <CustomAtag
        href="https://www.namsgym.com/"
        target="_blank"
        rel="noreferrer"
      >
        👉 남스짐 구경하러 가기
      </CustomAtag>

      {/* ===== */}

      <LineDiv />

      <Font fontSize="4rem" margin="1rem 0 0 0">
        3개 이상 해당된다면
      </Font>

      <Font fontSize="4rem" margin="1rem 0 0 0">
        바로 투게더 짐 2회 체험권을 예약해 보세요!
      </Font>

      <CustomImage
        style={{ margin: '4rem 0 0 0' }}
        src={banner1}
        alt="banner1"
        priority={true}
        quality={100}
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
      />

      <Button
        size="large"
        color="black"
        margin="4rem 0 0 0"
        onClick={() =>
          window.open(
            'https://map.naver.com/v5/search/%ED%88%AC%EA%B2%8C%EB%8D%94%EC%A7%90/place/1616639182?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh',
          )
        }
      >
        <Font fontSize="2.5rem">2회 체험권 예약하기</Font>
      </Button>

      <LineDiv />

      <Font fontSize="4rem" margin="0rem 0 0 0">
        투게더 짐이 추구하는
      </Font>

      <Font fontSize="4rem" margin="1rem 0 0 0">
        4가지 팀 트레이닝 철학
      </Font>

      <Wrapper>
        <PreTagWrapper>
          <Font fontSize="4.5rem" margin="7rem 0 2.5rem 0">
            1. 효율성
          </Font>

          <CustomPretag fontSize="2.5rem">
            {`50분 안에 설정한 칼로리를 소모하는데
목적이 있는 고강도 서킷 트레이닝입니다.
짧고 강도 있게 효율적으로 운동합니다.
그 효과는 언제나 기대 이상입니다.
`}
          </CustomPretag>
        </PreTagWrapper>

        <CustomImageWrapper>
          <CustomImage
            src={main1}
            alt="image1"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </CustomImageWrapper>
      </Wrapper>

      <Wrapper>
        <PreTagWrapper>
          <Font fontSize="4.5rem" margin="7rem 0 2.5rem 0">
            2. 전문성
          </Font>

          <CustomPretag fontSize="2.5rem">
            {`효율적이라고 해서 대충 운동하지 않습니다.
자격을 갖춘 지도자와 함께 다치치 않고
올바르게 운동할 수 있도록 이끕니다.
투게더 짐은 지속 가능한
운동을 추구합니다.
`}
          </CustomPretag>
        </PreTagWrapper>

        <CustomImageWrapper>
          <CustomImage
            src={main2}
            alt="image2"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </CustomImageWrapper>
      </Wrapper>

      <Wrapper>
        <PreTagWrapper>
          <Font fontSize="4.5rem" margin="7rem 0 2.5rem 0">
            3. 지속가능성
          </Font>

          <CustomPretag fontSize="2.5rem">
            {`우리는 365일 닭가슴살과 고구마만
먹고 살 수 없다는 걸 알아요.
여기서 운동하는 목적이 무대 위에 서는
보디빌딩 선수나 경쟁을 목표하는
전문 운동선수가 아니란 걸 알고 있습니다.
운동하는 즐거움과 재미를 느껴 매일 오는
이 공간이 당신에게 웃음 짓는 공간일 수
있도록 노력합니다.
스스로 운동할 수 있도록 하는 것이 투게더 짐의 궁극적인 목적입니다.
`}
          </CustomPretag>
        </PreTagWrapper>

        <CustomImageWrapper>
          <CustomImage
            src={main3}
            alt="image3"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </CustomImageWrapper>
      </Wrapper>

      <Wrapper>
        <PreTagWrapper>
          <Font fontSize="4.5rem" margin="7rem 0 2.5rem 0">
            4. 함께하는 의미
          </Font>

          <CustomPretag fontSize="2.5rem">
            {`빨리 가려면 혼자!
멀리 가려면 함께!
투게더 짐은 함께하는 것에 큰 의미를
두고 있어요.
투게더 짐의 강력한 커뮤니티를
기반으로 서로에게 파이팅을 외치며
혼자서는 이겨낼 수 없는 힘듦을
같이 이겨내요.
그렇게 함께하다 보면 어느새 바뀐 거울 속 내 모습에 놀라게 될 거예요.
`}
          </CustomPretag>
        </PreTagWrapper>

        <CustomImageWrapper>
          <CustomImage
            src={main4}
            alt="image4"
            priority={true}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
          />
        </CustomImageWrapper>
      </Wrapper>

      <LineDiv />

      <Button
        size="large"
        color="black"
        onClick={() =>
          window.open(
            'https://map.naver.com/v5/search/%ED%88%AC%EA%B2%8C%EB%8D%94%EC%A7%90/place/1616639182?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=15,0,0,0,dh',
          )
        }
      >
        <Font fontSize="2.5rem">2회 체험권 예약하기</Font>
      </Button>

      <IconFrame>
        <IconWrapper
          onClick={() =>
            window.open('https://www.instagram.com/togethergym_official/')
          }
        >
          <Image src={instagram} alt="instagram" width={30} height={30} />
          <Font fontSize="2.7rem">투게더 짐 인스타그램</Font>
        </IconWrapper>

        <IconWrapper onClick={() => window.open('http://pf.kakao.com/_nXyLxj')}>
          <Image src={kakaotalk} alt="kakaotalk" width={30} height={30} />
          <Font fontSize="2.7rem">카카오톡 상담하기</Font>
        </IconWrapper>

        <IconWrapper>
          <Image src={phone} alt="phone" width={30} height={30} />
          <a
            style={{ fontSize: '2.7rem', textDecoration: 'none' }}
            href={`tel:031-403-0776`}
          >
            전화문의
          </a>
        </IconWrapper>
      </IconFrame>

      <LineDiv />

      <BusinessInfoFrame>
        <LogoImage src={logo} alt="logo" width={100} height={100} />

        <BusinessInfoWrapper>
          <Font>상호명 : 투게더 짐 고잔점</Font>
          <Font>사업자등록번호 : 889-06-02586</Font>
          <Font>대표자 : 황재민 외 1명</Font>
          <Font>{`주소 : 경기도 안산시 단원구 광덕서로 66 B101~B107호 (고잔동)`}</Font>
          <Font>전화번호 : 031-403-0776 | 이메일 : xnrpejwla@naver.com</Font>
        </BusinessInfoWrapper>
      </BusinessInfoFrame>
    </Frame>
  );
};

export default Home;

const Frame = styled.div`
  max-width: 100rem;
  margin: 0 auto;
  padding: 0 3rem 10rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

  width: calc(100% + 3rem * 2);
  margin: 0px -3rem 0px -3rem;
`;

const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => (props.margin ? props.margin : '')};
`;

const CustomAtag = styled.a`
  font-size: 4rem;
  text-decoration: underline;
`;

const CustomPretag = styled.pre`
  font-size: ${props => (props.fontSize ? props.fontSize : '4rem')};
  white-space: pre-wrap;
  line-height: 5.5rem;

  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;

const PreTagWrapper = styled.div`
  width: 50%;

  @media screen and (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 12rem;

  @media screen and (max-width: 450px) {
    width: 100%;
    flex-direction: column;
  }
`;

const CustomImageWrapper = styled.div`
  width: 50%;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const LineDiv = styled.div`
  width: 100%;
  margin: ${props => (props.margin ? props.margin : '10rem 0')};
  border: 1px solid #989898;
`;

const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const IconFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 0 0;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;

  p {
    transform: translateY(2px);
  }
`;

const BusinessInfoFrame = styled.div`
  display: flex;
  gap: 1rem;
`;

const BusinessInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

const LogoImage = styled(Image)`
  border-radius: 25%;
  cursor: pointer;
`;

const IframeWrapper = styled.div`
  position: relative;
  margin-top: 10rem;
  padding-top: 56%;
  width: 100%;
  height: 0;
  margin-bottom: 3rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
