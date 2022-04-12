import React from 'react';

import logo from '../assets/shared/images/launchtime-logo.svg';

const Logo = () => {
  return (
    <span className="logo">
      <img src={logo} alt="Logo" />
      LaunchTime - 2
    </span>
  )
}

export default Logo;