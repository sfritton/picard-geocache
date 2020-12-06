import React from 'react';
import { DISARMING_CODE } from '../../../../constants';
import styles from './codescreen.module.css';

const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const CodeScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      {letters.map((letter) => {
        const codeIndex = DISARMING_CODE.split('').findIndex((l) => l.toUpperCase() === letter) + 1;
        return (
          <div key={letter} className={styles.letterRow}>
            <div className={styles.letterKey}>{letter}</div>
            {DISARMING_CODE.split('').map((char, i) => (
              <div data-filled={i + 1 === codeIndex} className={styles.block} key={char} />
            ))}
            {codeIndex > 0 && <div className={styles.codeIndex}>{codeIndex}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default CodeScreen;
