import React from 'react';
import GrandChild from './GrandChild';

const Child = ({ message }) => {
  return <GrandChild message={message} />;
};

export default Child;
