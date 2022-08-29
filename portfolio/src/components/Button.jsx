import React from 'react';
import ReactBubblyEffectButton from 'react-bubbly-effect-button';
import { useHistory } from 'react-router-dom';
import '../styles/Button.css';

function Button() {
  const history = useHistory();
  const onClick = () => {
    setTimeout(() => {
      history.push('/contact');
    }, 350);
  };
  return <ReactBubblyEffectButton text="Say hello!" color="#fff" bgColor="#ff6363" onClick={onClick} />;
}

export default Button;
