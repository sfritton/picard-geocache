import React from 'react';
import styles from './input.module.css';

const Input: React.FC = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} spellCheck={false} />
    </div>
  );
};

export default Input;
