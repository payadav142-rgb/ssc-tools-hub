import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SSC Tools Hub",
  description:
    "Read the privacy policy of SSC Tools Hub.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}