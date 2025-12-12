import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Creaconsult - Jobs offers",
  description:
    "Join our team of experts and contribute to innovative projects in engineering and project management. Explore our job offers and become part of our commitment to excellence.",
};


export default async function Layout({ children }: LayoutProps) {
  return children;
}
