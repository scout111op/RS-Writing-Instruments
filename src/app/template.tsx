"use client";

import dynamic from "next/dynamic";

const PullToRefresh = dynamic(() => import("@/components/PullToRefresh"), {
  ssr: false,
});

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PullToRefresh />
      <div className="w-full">{children}</div>
    </>
  );
}
