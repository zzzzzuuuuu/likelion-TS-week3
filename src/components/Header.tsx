import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        User List
      </button>
      <button
        onClick={() => {
          navigate(`/register`);
        }}
      >
        Sign Up
      </button>
      <button
        onClick={() => {
          navigate(`/login`);
        }}
      >
        Log in
      </button>
    </>
  );
};

export default Header;
