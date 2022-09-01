import React from 'react';
import ReactBubblyEffectButton from 'react-bubbly-effect-button';
import { useHistory } from 'react-router-dom';
import '../styles/Button.css';

function Button() {
  const history = useHistory();
  const onClick = () => {
    setTimeout(() => {
      history.push('/projects');
    }, 350);
  };
  return <ReactBubblyEffectButton text="My work" color="#ff6363" bgColor="#fff" onClick={onClick} />;
}

export default Button;
