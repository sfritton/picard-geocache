import React from 'react';
import Nav from '../Nav';
import styles from './content.module.css';

const Content: React.FC = ({ children }) => {
  return (
    <div className={styles.contentBorder}>
      <Nav />
      <div className={styles.content}>{children}</div>
      <div className={`${styles.borderBlock} ${styles.borderBlock1}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock2}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock3}`}></div>
      <div className={`${styles.borderBlock} ${styles.borderBlock4}`}></div>
    </div>
  );
};

export default Content;
