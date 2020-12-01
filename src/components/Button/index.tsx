import React from 'react';
import styles from './button.module.css';

interface Props {
  color?: 'orange' | 'orange-light' | 'blue';
}

const Button: React.FC<Props> = ({ children, color = 'orange' }) => {
  return (
    <button data-color={color} className={styles.button}>
      {children}{' '}
    </button>
  );
};

export default Button;
