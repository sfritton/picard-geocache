import React from 'react';
import styles from './button.module.css';

interface Props {
  color?: 'orange' | 'orange-light' | 'blue';
  isRound?: boolean;
}

const Button: React.FC<Props> = ({ children, color = 'orange', isRound = false }) => {
  return (
    <button data-color={color} data-is-round={isRound} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
