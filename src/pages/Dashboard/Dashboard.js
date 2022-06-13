import React from 'react';
// import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

import Layout from '../Layout';

// const useStyle = makeStyles(() => ({
//   root: {},
// }));

function Dashboard() {
  // const classes = useStyle();
  return (
    <Layout>
      <h3>Dashboard</h3>
      <Button variant="contained">Hello World</Button>
    </Layout>
  );
}

export default Dashboard;
