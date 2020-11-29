import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Providers from './contexts';
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobalStyles />
    <Providers>
      <Routes />
    </Providers>
  </Router>
);

export default App;
