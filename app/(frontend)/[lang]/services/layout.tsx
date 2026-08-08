import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Creaconsult - Services",
  description:
    "Innovative engineering and project management solutions for exceptional projects. Explore our services and discover how we can help you achieve your goals.",
};


export default async function Layout({ children }: LayoutProps) {
  return children;
}
