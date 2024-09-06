import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface Update {
  avatarSrc: string;
  avatarFallback: string;
  name: string;
  position: string;
  timeAgo: string;
}

interface RecentUpdatesProps {
  updates: Update[];
}

const RecentUpdates: React.FC<RecentUpdatesProps> = ({ updates }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Recently Updated</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {updates.map((update, index) => (
          <div key={index} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={update.avatarSrc} alt="Avatar" />
              <AvatarFallback>{update.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{update.name}</p>
              <p className="text-sm text-muted-foreground">{update.position}</p>
            </div>
            <div className="ml-auto font-medium text-emerald-500">{update.timeAgo}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentUpdates;
