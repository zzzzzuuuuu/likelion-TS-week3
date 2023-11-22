import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './ds/components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './ds/theme';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/GlobalFonts';

function App() {
  const navigate = useNavigate();

  const tabList = [
    {
      id: 0,
      title: '로그인',
    },
    {
      id: 1,
      title: '회원가입',
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Header onClickLogo={() => navigate(`/`)} tabs={tabList} />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
