import React, { useState } from 'react';

function Toggle() {
  const [isToggle, setIsToggle] = useState('user1');

  const switchUser = () => {
    setIsToggle((lastPerson) => (lastPerson === 'user1' ? 'user2' : 'user1'));
  };

  return {isToggle,switchUser};
}

export default Toggle;