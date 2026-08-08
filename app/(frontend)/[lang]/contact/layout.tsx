import PageIntro from "@/components/global/PageIntro";
import { Metadata } from "next";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Creaconsult - contact us",
  description: "Share your projects and let's work together",
};


export default async function Layout({ children }: LayoutProps) {
  return (
    <PageIntro title="Contact" img="/ui/intro/ContactIntro.webp">
      {children}
    </PageIntro>
  );
}
