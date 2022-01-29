import React from 'react';

export const DataContext = React.createContext();

export default function Provider({children}) {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}
