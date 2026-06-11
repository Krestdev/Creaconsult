"use client";
// Job

import { useQuery } from "@tanstack/react-query";
import { ContactApi, JobApi, NewApi } from "./api";

class JobQuery {
  jobs = () => {
    return useQuery({
      queryKey: ["jobs"],
      queryFn: () => JobApi.getJob(),
    });
  };

  jobById = (id: string) => {
    return useQuery({
      queryKey: ["job", id],
      queryFn: () => JobApi.getById(id),
    });
  };
}

export const jobQuery = new JobQuery();

class NewQuery {
  news = () => {
    return useQuery({
      queryKey: ["news"],
      queryFn: () => NewApi.getNew(),
    });
  };

  newById = (id: string) => {
    return useQuery({
      queryKey: ["new", id],
      queryFn: () => NewApi.getById(id),
    });
  };
}

export const newQuery = new NewQuery();

class ContactQuery {
  contacts = () => {
    return useQuery({
      queryKey: ["contacts"],
      queryFn: () => ContactApi.getContact(),
    });
  };

  contactById = (id: string) => {
    return useQuery({
      queryKey: ["contact", id],
      queryFn: () => ContactApi.getById(id),
    });
  };
}

export const contactQuery = new ContactQuery();
