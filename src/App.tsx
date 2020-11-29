import React from 'react';
import GlobalStyles from './styles/global';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/Toast';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AuthProvider>
      <ToastContainer />
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
