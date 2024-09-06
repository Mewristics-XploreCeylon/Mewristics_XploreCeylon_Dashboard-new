"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

interface SocialProps {
  callbackUrl: string;
}

export const Social = ({ callbackUrl }: SocialProps) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="w-full" size="lg" variant="outline" onClick={() => signIn("google", { callbackUrl })}>
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button className="w-full" size="lg" variant="outline" onClick={() => signIn("github", { callbackUrl })}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
