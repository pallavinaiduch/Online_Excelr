import React from 'react';
import Child from './Child';
import MessageContext from './MessageContext';

const Parent = () => {
  const message = "Hello from Parent using Context!";
  return (
    <MessageContext.Provider value={message}>
      <Child />
    </MessageContext.Provider>
  );
};

export default Parent;
