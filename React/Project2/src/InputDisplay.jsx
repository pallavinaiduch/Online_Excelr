import React, { useState } from 'react';

const InputDisplay = () => {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>You entered: {submitted}</p>}
    </div>
  );
};

export default InputDisplay;