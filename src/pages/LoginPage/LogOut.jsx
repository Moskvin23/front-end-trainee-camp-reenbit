import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styles from './LogOut.module.scss';

const LogOut = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className={styles.containerWithButton}>
        <button onClick={() => logout({ returnTo: window.location.origin })} className="button">
          LogOut
        </button>
      </div>
    )
  );
};

export default LogOut;
