import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api/fetcher';

interface User {
  email: string;
  password: string;
  username: string;
}

const Users = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_BASE_URL}/api/users`,
    fetcher,
  );
  console.log(data);

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data &&
        data.data.users.map((user: User, index: number) => (
          <div key={index}>
            <span>{user.email}</span>
            <span>{user.password}</span>
            <span>{user.username}</span>
          </div>
        ))}
    </div>
  );
};

export default Users;
