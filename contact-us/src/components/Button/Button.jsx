import React from 'react'
import { MdMessage } from 'react-icons/md';
import styles from './Button.module.css';
function Button(props) {
  const {isOutline, icon , text} =  props;
    // console.log(props);
  return (
    <button className={isOutline ?styles.outline_btn: styles.primary_btn}>
         {icon}
        {text}
        </button>
  );
};

export default Button;