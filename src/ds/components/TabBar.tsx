import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

export interface TabTypes {
  // TabBar에서 지정했으니 여기서 받음
  id: number;
  title: string;
}

interface TabBarProps {
  tabs: TabTypes[];
}
const TabBar = ({ tabs }: TabBarProps) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab key={tab.id}>{tab.title}</Tab>
      ))}
    </Container>
  );
};

export default TabBar;

const Container = styled.div`
  display: flex;
  gap: 40px;
`;
