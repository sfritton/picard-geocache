import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import DistressSignalEntry from '../../log-entries/01-distress-signal';
import UniversalTranslator from '../../components/UniversalTranslator';
import EncryptionEntry from '../../log-entries/02-encryption';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="LCARS Access 411" stardate="46257.4" />
      <Layout.Content>
        <Layout.ToolContainer tool="log">
          <h2>Captain's Log</h2>
          <DistressSignalEntry />
          <EncryptionEntry />
        </Layout.ToolContainer>
        <UniversalTranslator />
        <Layout.ToolContainer tool="library">
          <h2>Personal Library</h2>Some stuff about Star Trek
        </Layout.ToolContainer>
        <Layout.ToolContainer tool="comms">
          <h2>Subspace Comms</h2>Some stuff about Star Trek
        </Layout.ToolContainer>
      </Layout.Content>
    </Layout.Grid>
  );
};

export default Home;
