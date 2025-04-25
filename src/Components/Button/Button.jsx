import React from 'react';
import './Button.css';

function Button({ buttonUrl, buttonName }) {
  return (
    <>
      <a href={buttonUrl} className='button__social' target='_blank'>
        {buttonName}
      </a>
    </>
  );
}

export default Button;
