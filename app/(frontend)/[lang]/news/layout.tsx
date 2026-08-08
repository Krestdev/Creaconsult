import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Creaconsult - News",
  description:
    "Get the latest news and updates from Creaconsult. Stay informed about our projects, achievements, and industry insights.",
};

export default async function Layout({ children }: LayoutProps) {
  return children;
}
