"use client";

import PullToRefresh from "@/components/PullToRefresh";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PullToRefresh />
      <div className="w-full">{children}</div>
    </>
  );
}
