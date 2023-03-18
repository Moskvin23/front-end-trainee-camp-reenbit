import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styles from './Login.module.scss';
const Login = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    !isAuthenticated && (
      <div className={styles.container}>
        <h2>Welcome to the Reenbit Test Task </h2>
        <button onClick={() => loginWithRedirect()} className="button">
          Login / Sign Up
        </button>
      </div>
    )
  );
};

export default Login;
