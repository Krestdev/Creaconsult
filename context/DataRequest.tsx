import directus from "@/lib/directus/directus";
import { readItem, readItems } from "@directus/sdk";
import { createContext, useContext, useState } from "react";

export interface QueryContetxtType {
  getJobs: () => Promise<Record<string, any>[]>;
}

const QueryContext = createContext<null | QueryContetxtType>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const getJobs = () => {
    return directus.request(readItems("Jobs"));
  };
  return (
    <QueryContext.Provider value={{ getJobs }}>
      {children}
    </QueryContext.Provider>
  );
};

export default ContextProvider;

export const useQueryContext = () => {
  const data = useContext(QueryContext);
  if (data) {
    return data;
  }
  throw new Error("Cannot use this function out of context scope");
};
