import React, { useState } from 'react';

const PalindromeChecker = () => {
  const [number, setNumber] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setNumber(value);

    const reversed = value.split('').reverse().join('');
    setIsPalindrome(value === reversed && value !== '');
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      {isPalindrome !== null && (
        <p>{isPalindrome ? "It's a palindrome" : "Not a palindrome"}</p>
      )}
    </div>
  );
};

export default PalindromeChecker;
