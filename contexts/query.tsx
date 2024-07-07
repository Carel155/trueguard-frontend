"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, PropsWithChildren } from "react";

const ReactQueryProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [queryClientStore] = useState(() => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } }));

  return <QueryClientProvider client={queryClientStore}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
