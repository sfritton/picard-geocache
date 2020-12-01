import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import DistressSignalEntry from '../../log-entries/01-distress-signal';
import UniversalTranslator from '../../components/UniversalTranslator';
import SubspaceComms from '../../components/SubspaceComms';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="USS Enterprise 1701-D" stardate="46257.6" />
      <Layout.Content>
        <Layout.ToolContainer tool="log">
          <h2>Captain's Log</h2>
          <DistressSignalEntry />
        </Layout.ToolContainer>
        <UniversalTranslator />
        <Layout.ToolContainer tool="library">
          <h2>Personal Library</h2>Some stuff about Star Trek
        </Layout.ToolContainer>
        <SubspaceComms />
      </Layout.Content>
    </Layout.Grid>
  );
};

export default Home;
