import React, { useState, useRef } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name (Controlled):', name);
    console.log('Email (Uncontrolled):', emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name (Controlled):</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email (Uncontrolled):</label>
        <input type="email" ref={emailRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
