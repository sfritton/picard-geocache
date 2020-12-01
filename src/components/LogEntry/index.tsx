import React from 'react';
import styles from './log.module.css';

interface Props {
  stardate: string;
}

const LogEntry: React.FC<Props> = ({ children, stardate }) => {
  return (
    <section className={styles.section}>
      <h3>Stardate {stardate}</h3>
      {children}
    </section>
  );
};

export default LogEntry;
