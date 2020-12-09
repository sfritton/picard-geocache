import React from 'react';
import { PageProps } from 'gatsby';
import CodeScreen from '../../components/Klingon/CodeScreen';
import Input from '../../components/Klingon/Input';

const Decloaked: React.FC<PageProps> = () => {
  return (
    <div>
      <CodeScreen />
      <Input />
    </div>
  );
};

export default Decloaked;
