import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Users from './pages/Users';

function App() {
  return (
    <>
      <Users />
      <p> ---- </p>
      <Login />
      <p> ---- </p>
      <Register />
    </>
  );
}

export default App;
