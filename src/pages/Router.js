import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Login from './Login';
// import NotFound from './NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* create PrivateRoute later */}
      {/* <Route component={NotFound} /> */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
