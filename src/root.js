'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginViewComponent from './views/LoginViewComponent';
import style from './scss/style.scss';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <LoginViewComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


