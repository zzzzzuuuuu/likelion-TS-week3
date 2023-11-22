import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../api/fetcher';
import styled from 'styled-components';
import { ReactComponent as SunglassesLion } from '../ds/icons/BigLion.svg';
import Card from '../ds/components/Card';

export interface UserTypes {
  email: string;
  password?: string;
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
    <Container>
      <UserContainer>
        <MainLion />
        <UserInnerContainer>
          {data &&
            data.data.users.map((user: UserTypes, index: number) => (
              <Card key={index} user={user} />
            ))}
        </UserInnerContainer>
      </UserContainer>
    </Container>
  );
};

export default Users;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`;

const UserInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
  align-self: stretch;
`;

const MainLion = styled(SunglassesLion)`
  padding: 60px 0;
`;
