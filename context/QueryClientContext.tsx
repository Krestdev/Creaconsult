"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ContextProvider from "./DataRequest";

const QueryClientContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ContextProvider>{children}</ContextProvider>
    </QueryClientProvider>
  );
};

export default QueryClientContext;
