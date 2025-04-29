"use client";

import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  hasNewFeed: boolean;
  setHasNewFeed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const MyContext = ({ children }: { children: React.ReactNode }) => {
  const [hasNewFeed, setHasNewFeed] = useState(false);

  return (
    <AuthContext.Provider value={{ hasNewFeed, setHasNewFeed }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
