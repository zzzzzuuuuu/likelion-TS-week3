import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Users from './pages/Users';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
