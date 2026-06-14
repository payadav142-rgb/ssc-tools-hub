import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - SSC Tools Hub",
  description:
    "Terms and conditions for using SSC Tools Hub.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}