import { BlocksContent } from "@strapi/blocks-react-renderer";

// JOB
export interface Job {
  id: number;
  documentId: string;
  title: string;
  description: BlocksContent;
  bref: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  location: string;
  type: string;
  expire: string;
  illustration: Illustration;
}

export interface Description {
  type: string;
  children: Child[];
}

export interface Child {
  type: string;
  text: string;
}

export interface Illustration {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string;
  caption: string;
  focalPoint: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Formats {
  thumbnail: Large;
  small: Large;
  medium: Large;
  large: Large;
}

export interface Large {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

// Contact
export type Contact = {
  id: 2;
  documentId: string;
  name: string;
  email: string;
  message: string;
  subject: string;
  profession: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type New = {
  id: 2;
  cover: Illustration;
  images: Illustration[];
  documentId: string;
  title: string;
  content: [
    {
      type: string;
      children: [
        {
          type: string;
          text: string;
        },
      ];
    },
  ];
  headline: boolean;
  slug: string;
  subtitle: string;
  bref: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
