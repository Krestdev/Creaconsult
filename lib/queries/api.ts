import { Contact, Job, New } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

// Base fetch with error handling

export class APIError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = "APIError";
  }
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const url = `${API_URL}${endpoint.startsWith("/") ? endpoint : "/" + endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new APIError(
        response.status,
        data.code || "UNKNOWN_ERROR",
        data.message || `API request failed with status ${response.status}`,
      );
    }

    return data as T;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      0,
      "NETWORK_ERROR",
      `Network error: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

// Job APIs
export const JobApi = {
  getJob: async () => {
    const { data } = await fetchAPI<{ data: Job[]; meta: any }>(
      `/jobs?populate=*`,
    );
    return data;
  },

  getById: async (jobId: string) => {
    const { data } = await fetchAPI<{ data: Job; meta: any }>(
      `/jobs/${jobId}?populate=*`,
    );
    return data;
  },
};

// New APIs
export const NewApi = {
  getNew: async () => {
    const { data } = await fetchAPI<{ data: New[]; meta: any }>(
      `/news?populate=*`,
    );
    return data;
  },

  getById: async (newId: string) => {
    const { data } = await fetchAPI<{ data: New; meta: any }>(
      `/news/${newId}?populate=*`,
    );
    return data;
  },
};

// Contact APIs
export const ContactApi = {
  getContact: async () => {
    const { data } = await fetchAPI<{ data: Contact[]; meta: any }>(
      `/contact?populate=*`,
    );
    return data;
  },

  getById: async (contactId: string) => {
    const { data } = await fetchAPI<{ data: Contact[]; meta: any }>(
      `/contact/${contactId}?populate=*`,
    );
    return data;
  },
};
