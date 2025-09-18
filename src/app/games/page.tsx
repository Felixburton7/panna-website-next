"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GamesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/download");
  }, [router]);
  return null;
}
