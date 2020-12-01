import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function Home() {
  return (
    <Layout.Grid>
      <Layout.Header title="LCARS Access 411" />
      <Layout.Content>
        <h2>Hello World</h2>Some stuff about Star Trek
        <h3>More stuff</h3>Some stuff about Star Trek
        <h4>Even more</h4>Some stuff about Star Trek
        <div>
          <Button>Orange Button</Button>
        </div>
        <div>
          <Button color="orange-light">Orange Light Button</Button>
        </div>
        <div>
          <Button color="blue">Blue Button</Button>
        </div>
      </Layout.Content>
    </Layout.Grid>
  );
}
