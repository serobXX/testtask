"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { ServiceItem } from "./data";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons];

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}