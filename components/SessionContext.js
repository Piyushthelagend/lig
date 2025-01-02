"use client"
import React, { createContext, useContext } from "react";

// Create the context
const SessionContext = createContext(null);

// Custom hook to use the session context
export const useSession = () => useContext(SessionContext);

// Provider component
export const SessionProvider = ({ children, session }) => {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};
