import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';

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

export default Login;
