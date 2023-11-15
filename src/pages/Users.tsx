// export {};

import React from 'react';
import useSWR from 'swr';

interface User {
  email: string;
  password: string;
  username: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json()); // 여기 중괄호로 묶으면 안됨 .. 진짜 왜지

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
      {
        data &&
          data.data.users.map((user: User, index: number) => (
            <div key={index}>
              <span>{user.email}</span>
              <span>{user.password}</span>
              <span>{user.username}</span>
            </div>
          ))
        // <p>ㅎㅇ</p>
      }
    </div>
  );
};

export default Users;
