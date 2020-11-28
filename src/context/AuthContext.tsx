import * as React from 'react';

type State = { token: string; user: object };

interface Dispatch {
  signIn(credentials: Credentials): Promise<void>;
}
interface Credentials {
  email: string;
  password: string;
}

const AuthStateContext = React.createContext<State>({} as State);
const AuthDispatchContext = React.createContext<Dispatch>({} as Dispatch);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<State>({} as State);

  const signIn = React.useCallback(async ({ password, email }) => {
    console.log('inside context');
  }, []);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={{ signIn }}>
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
