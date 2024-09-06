"use client";

import { LogInForm } from "@/components/auth/login-form";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to the callbackUrl after successful sign-in
      router.push(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return <div>Redirecting...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <LogInForm />
      {/* <LoginButtonNew callbackUrl={callbackUrl} /> */}
    </div>
  );
}
