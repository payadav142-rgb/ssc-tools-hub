import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SSC Tools Hub",
  description:
    "Learn about SSC Tools Hub, free SSC preparation tools, resources and study utilities.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}