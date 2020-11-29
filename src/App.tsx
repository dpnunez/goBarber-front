import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Providers from './contexts';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <Providers>
      <SignIn />
    </Providers>
  </>
);

export default App;
