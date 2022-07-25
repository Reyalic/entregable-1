import React from 'react';

const Author = ({author, color}) => {
  return (
    <div style={{color: `#${color}`}}>{author}</div>
  );
}

export default Author;