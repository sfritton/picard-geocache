import React from 'react';
import styles from './key.module.css';

const key = [
  ['A', '←←'],
  ['B', '←↑'],
  ['C', '←→'],
  ['D', '←↓'],
  ['E', '←↔'],
  ['F', '←↕'],
  ['G', '↑←'],
  ['H', '↑↑'],
  ['I', '↑→'],
  ['J', '↑↓'],
  ['K', '↑↔'],
  ['L', '↑↕'],
  ['M', '→←'],
  ['N', '→↑'],
  ['O', '→→'],
  ['P', '→↓'],
  ['Q', '→↔'],
  ['R', '→↕'],
  ['S', '↓←'],
  ['T', '↓↑'],
  ['U', '↓→'],
  ['V', '↓↓'],
  ['W', '↓↔'],
  ['X', '↓↕'],
  ['Y', '↔←'],
  ['Z', '↔↑'],
  ['0', '↔→'],
  ['1', '↔↓'],
  ['2', '↔↔'],
  ['3', '↔↕'],
  ['4', '↕←'],
  ['5', '↕↑'],
  ['6', '↕→'],
  ['7', '↕↓'],
  ['8', '↕↔'],
  ['9', '↕↕'],
];

const DecryptionKey: React.FC = () => {
  return (
    <ul className={styles.container}>
      {key.map(([letter, code]) => (
        <li key={letter} className={styles.li}>
          <span className={styles.letter}>{letter}</span>
          {code}
        </li>
      ))}
    </ul>
  );
};

export default DecryptionKey;
