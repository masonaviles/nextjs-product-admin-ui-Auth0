import { createContext, useContext, useReducer } from 'react';

const initialState = {
  // Define your initial global state here
  user: null,
  settings: {},
};

const GlobalStateContext = createContext({
    state: initialState,
    dispatch: (action: any) => {}
});

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    default:
      return state;
  }
}

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);