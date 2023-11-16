import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSWR from 'swr';

interface LoginFormValue {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValue>();
  const onSubmit: SubmitHandler<LoginFormValue> = (data: LoginFormValue) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>이메일</label>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <span>필수 입력 항목입니다.</span>}
      <label>비밀번호</label>
      <input type="password" {...register('password', { required: true })} />
      {errors.password && <span>필수 입력 항목입니다.</span>}
      <input type="submit" />
    </form>
  );
};

export default LoginForm;
