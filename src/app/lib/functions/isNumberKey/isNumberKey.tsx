import React from 'react'

const isNumberKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const key = event.key;
    if (
      ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete"].includes(key) ||
      (key >= '0' && key <= '9')
    ) {
      return;
    }
    event.preventDefault();
  };

export default isNumberKey