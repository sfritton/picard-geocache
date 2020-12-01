import React from 'react';
import styles from './header.module.css';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.headerBorder}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
      <div className={styles.borderBlockLeft}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock1}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock2}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock3}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock4}`}></div>
    </div>
  );
};

export default Header;
