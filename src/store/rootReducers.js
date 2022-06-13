import { combineReducers } from 'redux';

// reducers
// import variablesreducer from './reducer/variables.reducers';
// import tabsReducer from './reducer/tabs.reducers';
// import chartReducer from './reducer/chart.reducers';
// import chartFormReducer from './reducer/chartForm.reducers';
// import chartValueReducer from './reducer/chartValue.reducers';

const initialReducers = {
  variable: [],
  tabs: [],
  chart: [],
};
const reducers = combineReducers(initialReducers);

export default reducers;
