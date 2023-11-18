import React from 'react';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './ds/theme';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/GlobalFonts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
