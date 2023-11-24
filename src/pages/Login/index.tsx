import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';
import styled from 'styled-components';
import Input from '../../ds/components/Input';
import Button from '../../ds/components/Button';

export interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/login', postFetcher, {
    onSuccess: async (res) => {
      console.log(res);
      const resData = await res.json();
      console.log(resData);
      console.log(resData.data);
      if (res.ok) {
        alert(resData.data);
        navigate(`/`);
      } else alert(resData.error);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
    console.log(data);
    trigger(data);
  };

  return (
    <Container>
      <LoginContainer>
        <LoginTitle>로그인</LoginTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type="email" name="email" register={register} required>
            이메일
          </Input>
          <Input type="password" name="password" register={register} required>
            비밀번호
          </Input>
          <Button type="submit" value="로그인" />
        </form>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  margin-top: 100px;
  background-color: lightgreen;
  width: 500px;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.p`
  ${({ theme }) => theme.typography.title1};
  padding-bottom: 70px;
`;
