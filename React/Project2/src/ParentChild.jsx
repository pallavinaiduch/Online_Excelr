import React from 'react';

const Child = ({ message }) => {
  return <p>Message from parent: {message}</p>;
};

const Parent = () => {
  return <Child message="Hello from Parent!" />;
};

export default Parent;