import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '../../api/fetcher';

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
        alert(resData.data);
        navigate(`/login`);
      } else {
        alert(resData.error);
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

export default Register;
