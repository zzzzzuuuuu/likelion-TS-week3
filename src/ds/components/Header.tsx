import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TabBar from './TabBar';
import { ReactComponent as LogoSvg } from '../icons/Lion.svg';
import { TabTypes } from './TabBar';

interface HeaderProps {
  onClickLogo: () => void;
  tabs: TabTypes[];
}

const Header = ({ onClickLogo, tabs }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <InnerContainer>
          <Logo onClick={onClickLogo} />
          <TabBar tabs={tabs} />
        </InnerContainer>
      </Container>
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    navigate(`/`);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  User List*/}
      {/*</button>*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    navigate(`/register`);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Sign Up*/}
      {/*</button>*/}
      {/*<button*/}
      {/*  onClick={() => {*/}
      {/*    navigate(`/login`);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Log in*/}
      {/*</button>*/}
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray3};
  position: sticky; // 헤더 상단에 붙여놓기
  top: 0;
  background: white;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  width: 100%;
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
`;
