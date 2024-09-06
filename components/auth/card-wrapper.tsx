"use client";

import { Header } from "./header";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Social } from "./social";
import { BackButton } from "./back-button";
import { useSearchParams } from "next/navigation";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>

      {showSocial && (
        <CardFooter>
          <Social callbackUrl={callbackUrl} />
        </CardFooter>
      )}

      <CardFooter>
        <BackButton 
            label={backButtonLabel}
            href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
