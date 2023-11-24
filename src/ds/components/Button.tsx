import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isActive?: boolean;
  type: string;
}
const Button = ({
  isActive = false,
  children,
  type,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <>
      <ButtonStyle type={type} $isActive={isActive}>
        {children}
      </ButtonStyle>
    </>
  );
};

export default Button;

const ButtonStyle = styled.input<{ $isActive: boolean }>`
  background: ${({ $isActive }) =>
    $isActive
      ? 'linear-gradient(93deg, #B1DE00 -3.88%, #1DE08E 103.41%)'
      : 'linear-gradient(93deg, #CF0 -3.88%, #40FFAF 103.41%)'};

  &:hover {
    background: linear-gradient(93deg, #beed04 -3.88%, #2ff19f 103.41%);
  }

  width: 100%;
  height: 54px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: white;
  ${({ theme }) => theme.typography.title1};
`;
