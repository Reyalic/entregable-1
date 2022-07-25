import React from 'react'

const Box = ({box, color}) => {
  console.log(color);
  return (
    <div style={{color: `#${color}`}}><i class="fa-solid fa-quote-left"></i>{ box }<i class="fa-solid fa-quote-right"></i></div>
  );
}

export default Box