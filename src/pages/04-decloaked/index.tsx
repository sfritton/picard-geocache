import React from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import CodeScreen from '../../components/Klingon/CodeScreen';
import Input from '../../components/Klingon/Input';
import CaptainsLogInsert from '../../components/Klingon/CaptainsLogInsert';
import DecloakedEntry from '../../log-entries/04-decloaked';
import styles from './decloaked.module.css';

const Decloaked: React.FC<PageProps> = () => {
  return (
    <div>
      <Helmet>
        <title>Klingon Osprey 053</title>
      </Helmet>
      <h1 className={styles.pageTitle}>Klingon Osprey 053</h1>
      <CaptainsLogInsert>
        <DecloakedEntry />
      </CaptainsLogInsert>
      <CodeScreen />
      <Input />
    </div>
  );
};

export default Decloaked;
