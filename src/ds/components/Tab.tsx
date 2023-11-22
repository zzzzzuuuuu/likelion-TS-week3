import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface TabProps {
  isActive?: boolean; // 옵션으로 주는 대신 기본값 주기
}
const Tab = ({ isActive = false, children }: PropsWithChildren<TabProps>) => {
  return (
    <>
      <Button $isActive={isActive}>{children}</Button>
    </>
  );
};

export default Tab;

const Button = styled.button<{ $isActive: boolean }>`
  padding: ${({ $isActive }) => ($isActive ? '22px 0 18px 0 ' : '22px 0')};
  border-bottom: ${({ $isActive, theme }) =>
    $isActive && `4px solid ${theme.color.green}`};
  ${({ theme }) => theme.typography.title1};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.green : theme.color.gray1};
  background-color: white;
  border: none;

  transition: all 0.2s ease-in-out;

  &:hover {
    padding: 22px 0 18px 0;
    color: ${({ theme }) => theme.color.green};
    border-bottom: 4px solid ${({ theme }) => theme.color.green};
  }
  cursor: pointer;
`;
