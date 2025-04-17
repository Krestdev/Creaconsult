import directus from "@/lib/directus/directus";
import { createItem, readItems } from "@directus/sdk";
import { createContext, useContext, useState } from "react";

export interface QueryContextType {
  getJobs: () => Promise<Record<string, any>[]>;
  subscribeClient: (data: {
    name: string;
    profession: string;
    subject: string;
    message: string;
    email: string;
  }) => Promise<Record<string, any>>;
  loading: boolean;
  error: string | null;
}

const QueryContext = createContext<null | QueryContextType>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getJobs = async () => {
    setLoading(true);
    try {
      const jobs = await directus.request(
        readItems("Jobs", {
          fields: ["*"], // Specify fields you need
        })
      );
      return jobs;
    } catch (err) {
      setError("Failed to fetch jobs");
      console.error("Error fetching jobs:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const subscribeClient = async (data: {
    name: string;
    profession: string;
    subject: string;
    message: string;
    email: string;
  }) => {
    try {
      const response = await fetch("/api/newsleter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Failed to subscribe:", error);
      throw error;
    }
  };

  return (
    <QueryContext.Provider
      value={{
        getJobs,
        subscribeClient,
        loading,
        error,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export default ContextProvider;

export const useQueryContext = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQueryContext must be used within a ContextProvider");
  }
  return context;
};
