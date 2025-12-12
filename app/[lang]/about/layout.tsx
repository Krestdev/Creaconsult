import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Creaconsult - about us",
  description:
    "CREACONSULT, an engineering and project management company founded in 2006, uses its proven expertise to create sustainable living environments. Committed to continuous improvement, we simplify every stage for project owners and investors.\n\nCertified ISO 9001 and 14001 (2015 standard), our management combines rigor, quality, and environmental commitment",
};


export default async function Layout({ children}: LayoutProps) {
  return children;
}
