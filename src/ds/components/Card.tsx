import React from 'react';
import { UserTypes } from '../../pages/Users';
import styled from 'styled-components';

interface UserProps {
  user: UserTypes;
}

const Card = ({ user }: UserProps) => {
  return (
    <UserBox>
      <EmailText>{user.email}</EmailText>
      <ContentsText>{user.username}</ContentsText>
    </UserBox>
  );
};

export default Card;

const UserBox = styled.div`
  width: 100%;
  border-radius: 12px;
  flex-direction: column;
  gap: 12px;
  background-color: white;
  box-shadow: 0 0 8px 0 #e5e8f0;
`;

// theme.ts 확인하기
const EmailText = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  padding: 14px 16px;
  font-size: 16px;
  ${({ theme }) => theme.color.gray2};
`;

const ContentsText = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  padding: 0 16px 12px 16px;
  font-size: 20px;
  ${({ theme }) => theme.color.gray1};
`;
