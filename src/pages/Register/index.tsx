import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';
import styled from 'styled-components';
import Input from '../../ds/components/Input';
import Button from '../../ds/components/Button';

export interface RegisterFormValues {
  email: string;
  password: string;
  username: string;
}

const Register = () => {
  const navigate = useNavigate();

  const { trigger } = useSWRMutation('/api/auth/register', postFetcher, {
    onSuccess: async (res) => {
      console.log(res);
      const resData = await res.json();
      if (res.ok) {
        alert(resData.data.message);
        navigate(`/login`);
      } else {
        alert(resData.error.message);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    data: RegisterFormValues,
  ) => {
    trigger(data);
  };

  return (
    <Container>
      <RegisterContainer>
        <RegisterTitle>회원가입</RegisterTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input>이름</Input>
          <Input>이메일</Input>
          <Input>비밀번호</Input>
          {/*<label>이메일</label>*/}
          {/*<input type="email" {...register('email', { required: true })} />*/}
          {/*{errors.email && <span>필수 입력 항목입니다.</span>}*/}
          {/*<label>비밀번호</label>*/}
          {/*<input type="password" {...register('password', { required: true })} />*/}
          {/*{errors.password && <span>필수 입력 항목입니다.</span>}*/}
          {/*<label>유저네임</label>*/}
          {/*<input type="text" {...register('username', { required: true })} />*/}
          {/*{errors.username && <span>필수 입력 항목입니다.</span>}*/}
          <Button type="submit" />
        </form>
        {/*<Button>가입하기</Button>*/}
      </RegisterContainer>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterContainer = styled.div`
  display: flex;
  margin-top: 100px;
  background-color: lightgreen;
  width: 500px;
  flex-direction: column;
  align-items: center;
`;

const RegisterTitle = styled.p`
  ${({ theme }) => theme.typography.title1};
  padding-bottom: 70px;
`;
