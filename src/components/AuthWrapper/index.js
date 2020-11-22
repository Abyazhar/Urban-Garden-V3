import React from 'react';
import './styles.scss';

const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="authWrapper">
      <div className="wrap">
        
        <div className="children">
          <div className="formWrap">
          {headline && <h2>{headline}</h2>}
          {children && children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;