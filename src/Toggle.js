import React, { useState } from 'react';

function Toggle() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return [isToggle,handleToggle];
}

export default Toggle;