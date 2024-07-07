"use client";

import { useContext } from "react";
import { GlobalStateContext } from "../contexts/global-state";

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  return context;
};

export default useGlobalState;
