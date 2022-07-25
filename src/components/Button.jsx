import React from 'react';

const Button = ({button, color}) => {
  return (
    <button style={{color: `#${color}`}} onClick={button}><i class="fa-solid fa-circle-arrow-right"></i></button>
  );
}

export default Button;