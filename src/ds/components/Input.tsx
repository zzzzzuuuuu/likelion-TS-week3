import React, { PropsWithChildren } from 'react';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormValues } from '../../pages/Login';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

interface InputProps {
  isActive?: boolean;
  isError?: boolean;
}
const Input = ({
  isActive = false,
  isError = false,
  children,
}: PropsWithChildren<InputProps>) => {
  return (
    <>
      <LoginBox>
        <LoginText>{children}</LoginText>
        <LoginInput $isActive={isActive} $isError={isError} />
      </LoginBox>
      {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
      {/*  <Container>*/}
      {/*    <LoginBox>*/}
      {/*      <LoginText>이메일</LoginText>*/}
      {/*      <LoginInput*/}
      {/*        type="email"*/}
      {/*        {...register('email', { required: true })}*/}
      {/*      />*/}
      {/*      /!*{errors.email && <span>필수 입력 항목입니다.</span>}*!/*/}
      {/*    </LoginBox>*/}
      {/*    <LoginBox>*/}
      {/*      <LoginText>비밀번호</LoginText>*/}
      {/*      <LoginInput*/}
      {/*        type="password"*/}
      {/*        {...register('password', { required: true })}*/}
      {/*      />*/}
      {/*      /!*{errors.password && <span>필수 입력 항목입니다.</span>}*!/*/}
      {/*      /!*<input type="submit" value="로그인" />*!/*/}
      {/*    </LoginBox>*/}
      {/*  </Container>*/}
      {/*  <Button>로그인</Button>*/}
      {/*</form>*/}
    </>
  );
};

export default Input;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gold;
  &:first-child {
    margin-bottom: 26px;
  }
  &:last-child {
    margin-bottom: 70px;
  }
`;

const LoginText = styled.p`
  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray1};
  padding-bottom: 6px;
`;

const LoginInput = styled.input<{ $isActive: boolean; $isError: boolean }>`
  // 실제 텍스트창 따로
  width: 500px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.color.gray1 : theme.color.gray3};
  // 에러 처리도 남아있어요. . . .
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.gray2};
  }
  &:focus {
    outline: none;
  }
`;
