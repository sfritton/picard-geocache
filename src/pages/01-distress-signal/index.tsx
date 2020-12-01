import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import DistressSignalEntry from '../../log-entries/01-distress-signal';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout.Grid>
      <Layout.Header title="LCARS Access 411" stardate="46257.3" />
      <Layout.Content>
        <Layout.ToolContainer tool="log">
          <h2>Captain's Log</h2>
          <DistressSignalEntry />
        </Layout.ToolContainer>
        <Layout.ToolContainer tool="translator">
          <h2>Universal Translator</h2>Some stuff about Star Trek
        </Layout.ToolContainer>
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
