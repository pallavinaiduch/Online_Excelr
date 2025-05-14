import React, { useContext } from 'react';
import MessageContext from './MessageContext';

const GrandChild = () => {
  const message = useContext(MessageContext);
  return <h2>{message}</h2>;
};

export default GrandChild;
