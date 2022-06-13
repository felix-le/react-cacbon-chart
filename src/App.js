import React from 'react';
// import Routess from './pages/Router';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './browserHistory';
import Router from './pages/Router';

// import Dashboard from 'pages/Dashboard';
// import Login from 'pages/Login';
// Style
import 'react-toastify/dist/ReactToastify.css';

import './styles/styles.scss';

function App() {
  return (
    <HistoryRouter history={history}>
      <Router />
    </HistoryRouter>
  );
}

export default App;
