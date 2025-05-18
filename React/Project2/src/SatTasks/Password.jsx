import React, { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter password"
      />
      <button onClick={togglePassword}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default PasswordInput;
