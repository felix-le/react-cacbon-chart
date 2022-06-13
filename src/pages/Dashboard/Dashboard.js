import React from 'react';
import { makeStyles } from '@mui/styles';
import Layout from '../Layout';

const useStyle = makeStyles((theme) => ({
  root: {},
  h1: {
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
  },
}));

function Dashboard() {
  const classes = useStyle();

  return (
    <Layout>
      <h1 className={classes.h1}>Dashboard</h1>
    </Layout>
  );
}

export default Dashboard;
