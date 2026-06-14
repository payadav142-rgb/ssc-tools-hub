import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SSC Tools Hub",
  description:
    "Contact SSC Tools Hub for support, feedback and suggestions.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}