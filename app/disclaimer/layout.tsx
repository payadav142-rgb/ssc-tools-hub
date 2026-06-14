import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - SSC Tools Hub",
  description:
    "Disclaimer and information usage policy of SSC Tools Hub.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}