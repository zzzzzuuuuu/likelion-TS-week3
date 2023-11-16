import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface RegisterFormValue {
  email: string;
  password: string;
  username: string;
}

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValue>();
  const onSubmit: SubmitHandler<RegisterFormValue> = (
    data: RegisterFormValue,
  ) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>이메일</label>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <span>필수 입력 항목입니다.</span>}
      <label>비밀번호</label>
      <input type="password" {...register('password', { required: true })} />
      {errors.password && <span>필수 입력 항목입니다.</span>}
      <label>유저네임</label>
      <input type="text" {...register('username', { required: true })} />
      {errors.username && <span>필수 입력 항목입니다.</span>}
      <input type="submit" />
    </form>
  );
};

export default RegisterForm;
