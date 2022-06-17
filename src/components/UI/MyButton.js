import React from 'react';
import classess from "./MyButton.module.css"
const MyButton = (props) => {
  return (
    <button className={classess.myButton} {...props}>
      
    </button>
  );
};

export default MyButton;