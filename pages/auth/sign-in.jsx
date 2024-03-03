import React, { useState } from 'react';
import { usePostSignIn } from '@/api/auth';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import useAuthCheck from '@/hooks/useAuthCheck';
import styled from 'styled-components';
import Button from '@/component/common/button';
import DotSpinner from '@/component/common/dot-spinner';
import Font from '@/component/common/font';
import Image from 'next/image';
import logo from '@/public/png/logo.png';

const SignIn = () => {
  const router = useRouter();
  const isLoggedIn = useAuthCheck();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [toastState, setToastState] = useRecoilState(toastStateAtom);

  const { mutate: signInMutate, isLoading: signInIsLoading } = usePostSignIn(
    setToastState,
    router,
  );

  if (isLoggedIn) {
    router.push('/');
    return;
  }

  return (
    <Frame>
      <SignInFrame>
        {signInIsLoading && <DotSpinner />}

        <FormWrapper>
          <StyledInput
            type="text"
            value={email || ''}
            placeholder="아이디"
            onChange={e => setEmail(e.target.value)}
          />

          <StyledInput
            type="password"
            value={password || ''}
            placeholder="비밀번호"
            autoComplete="off"
            onChange={e => setPassword(e.target.value)}
            onKeyUp={e => {
              if (e.key === 'Enter') {
                signInMutate({ email, password });
              }
            }}
          />

          <ButtonWrapper>
            <Button
              fontSize="1.6rem"
              size="large"
              color="blue"
              type="button"
              onClick={() => signInMutate({ email, password })}
            >
              로그인
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </SignInFrame>

      <BusinessInfoFrame>
        <LineDiv />

        <div className="wrapper">
          <LogoImage src={logo} alt="logo" width={100} height={100} />

          <BusinessInfoWrapper>
            <Font>상호명 : 투게더 짐 고잔점</Font>
            <Font>사업자등록번호 : 889-06-02586</Font>
            <Font>대표자 : 황재민</Font>
            <Font>{`주소 : 경기도 안산시 단원구 광덕서로 66 B101~B107호 (고잔동)`}</Font>
            <Font>전화번호 : 031-403-0776 | 이메일 : xnrpejwla@naver.com</Font>
          </BusinessInfoWrapper>
        </div>
      </BusinessInfoFrame>
    </Frame>
  );
};

export default SignIn;

const Frame = styled.div`
  height: 80vh;
  position: relative;
`;

const SignInFrame = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  margin: 0 auto;
  margin-top: 10rem;
  padding: 6rem;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
`;

const FormWrapper = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 40rem;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #000;
  }
`;

const ButtonWrapper = styled.div`
  width: 15rem;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
`;

const LineDiv = styled.div`
  margin: 4rem 0;
  border: 1px solid #989898;
`;

const BusinessInfoFrame = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

const BusinessInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const LogoImage = styled(Image)`
  border-radius: 25%;
  cursor: pointer;
  transform: translateY(8px);
`;
