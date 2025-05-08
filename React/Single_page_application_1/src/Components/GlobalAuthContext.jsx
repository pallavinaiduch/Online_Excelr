import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalAuthContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <GlobalAuthContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalAuthContext.Provider>
  );
}