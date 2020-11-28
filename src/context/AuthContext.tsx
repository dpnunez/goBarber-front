import * as React from 'react';
import api from '../services/apiClient';

type State = { token: string; user: object };

interface Dispatch {
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}
interface Credentials {
  email: string;
  password: string;
}

const AuthStateContext = React.createContext<State>({} as State);
const AuthDispatchContext = React.createContext<Dispatch>({} as Dispatch);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = React.useState<State>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as State;
  });

  const signIn = React.useCallback(async (credentials: Credentials) => {
    const { data } = await api.post('/sessions', credentials);
    const { token, user } = data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setAuth({ token, user });
    return data;
  }, []);

  const signOut = React.useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setAuth({} as State);
  }, []);

  return (
    <AuthStateContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={{ signIn, signOut }}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = (): State => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within a AuthProvider');
  }
  return context;
};
const useAuthDispatch = (): Dispatch => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuthDispatch, useAuthState };
