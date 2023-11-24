import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { RegisterFormValues } from '../../pages/Register';

interface InputProps {
  isActive?: boolean;
  isError?: boolean;
  name: 'email' | 'password' | 'username';
  type: string;
  register: UseFormRegister<RegisterFormValues>;
  required: boolean;
}
const Input = ({
  isActive = false,
  isError = false,
  name,
  type,
  register,
  required,
  children,
}: PropsWithChildren<InputProps>) => {
  return (
    <>
      <LoginBox>
        <LoginText>{children}</LoginText>
        <LoginInput
          $isActive={isActive}
          $isError={isError}
          type={type}
          {...register(name, { required })}
        />
      </LoginBox>
    </>
  );
};
Input.displayName = 'Input';
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
