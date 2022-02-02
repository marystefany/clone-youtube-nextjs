import React from 'react';
import { Button } from '@material-ui/core';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Youtube">
      Clone youtube com next.js + material-UI
      <Button variant="outlined" color="secondary">
        Hello
      </Button>
    </Layout>
  );
}
