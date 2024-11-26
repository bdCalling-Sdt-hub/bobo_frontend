"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      // Redirect to login page if email doesn't exist
      router.push("/fr/auth/login");
    }
  }, [router]);

  // Show children only if userEmail exists
  return <>{children}</>;
}
