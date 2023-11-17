import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface RegisterFormValues {
  email: string;
  password: string;
  username: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    data: RegisterFormValues,
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
        navigate(`/login`);
      })
      .catch((error) => {
        console.log(error);
      });
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
