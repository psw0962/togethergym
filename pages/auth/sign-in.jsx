import React, { useState } from 'react';
import { usePostSignIn } from '@/api/auth';
import { toastStateAtom } from 'atoms';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import useAuthCheck from '@/hooks/useAuthCheck';
import styled from 'styled-components';
import Button from '@/component/common/button';
import DotSpinner from '@/component/common/dot-spinner';

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
    </Frame>
  );
};

export default SignIn;

const Frame = styled.div`
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.form`
  margin-top: 10rem;
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
  display: flex;
  justify-content: center;
`;
