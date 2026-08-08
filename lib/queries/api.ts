import { Contact, Job, New } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

  const token = process.env.NEXT_PUBLIC_TOKEN;
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
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

const mapPayloadJob = (job: any): Job => {
  let tagsString = "";
  if (Array.isArray(job.tags)) {
    tagsString = job.tags.map((t: any) => t.tag).filter(Boolean).join(",");
  } else if (typeof job.tags === 'string') {
    tagsString = job.tags;
  }
  return {
    ...job,
    documentId: String(job.id),
    tags: tagsString,
  };
};

// Job APIs
export const JobApi = {
  getJob: async () => {
    const { docs } = await fetchAPI<{ docs: any[] }>(
      `/jobs`,
    );
    return docs.map(mapPayloadJob);
  },

  getById: async (jobId: string) => {
    const data = await fetchAPI<any>(
      `/jobs/${jobId}`,
    );
    return mapPayloadJob(data);
  },
};

const mapPayloadNew = (article: any): New => {
  return {
    ...article,
    documentId: article.slug || String(article.id),
  };
};

// New APIs
export const NewApi = {
  getNew: async () => {
    const { docs } = await fetchAPI<{ docs: any[] }>(
      `/news`,
    );
    return docs.map(mapPayloadNew);
  },

  getById: async (slug: string) => {
    // news details query by slug query parameter or id fallback
    const { docs } = await fetchAPI<{ docs: any[] }>(
      `/news?where[slug][equals]=${slug}`,
    );
    if (docs && docs.length > 0) {
      return mapPayloadNew(docs[0]);
    }
    // Fallback: try by ID directly
    try {
      const data = await fetchAPI<any>(`/news/${slug}`);
      return mapPayloadNew(data);
    } catch {
      throw new APIError(404, "NOT_FOUND", `News not found for slug or id: ${slug}`);
    }
  },
};

// Contact APIs
export const ContactApi = {
  getContact: async () => {
    const { docs } = await fetchAPI<{ docs: Contact[] }>(
      `/contacts`,
    );
    return docs;
  },

  getById: async (contactId: string) => {
    const data = await fetchAPI<Contact>(
      `/contacts/${contactId}`,
    );
    return data;
  },
};
