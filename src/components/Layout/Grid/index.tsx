import React from 'react';
import styles from './grid.module.css';

const Grid: React.FC = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
