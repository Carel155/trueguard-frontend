"use client";

import React, { ReactNode, createContext, useState } from "react";

type GlobalState = {
  accessDrawerOpen: boolean;
};

const GlobalStateContext = createContext({
  state: {
    accessDrawerOpen: false,
  },
  setState: (newState: GlobalState) => {},
});

const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<GlobalState>({
    accessDrawerOpen: false,
  });

  return <GlobalStateContext.Provider value={{ state, setState }}>{children}</GlobalStateContext.Provider>;
};

export { GlobalStateContext, GlobalStateProvider };
