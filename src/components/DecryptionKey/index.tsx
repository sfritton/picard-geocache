import React from 'react';
import { DECRYPTER_KEY } from '../../constants';
import styles from './key.module.css';

const DecryptionKey: React.FC = () => (
  <ul className={styles.container}>
    {DECRYPTER_KEY.map(([letter, code]) => (
      <li key={letter} className={styles.li}>
        <span className={styles.letter}>{letter}</span>
        {code}
      </li>
    ))}
  </ul>
);

export default DecryptionKey;
