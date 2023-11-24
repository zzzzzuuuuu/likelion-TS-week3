import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { useNavigate } from 'react-router-dom';

export interface TabTypes {
  // TabBar에서 지정했으니 여기서 받음
  id: number;
  title: string;
  url: string;
}

interface TabBarProps {
  tabs: TabTypes[];
}
const TabBar = ({ tabs }: TabBarProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab key={tab.id} onClickTab={() => navigate(tab.url)}>
          {tab.title}
        </Tab>
      ))}
    </Container>
  );
};

export default TabBar;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
