"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ServiceItem } from "./data";
import Image from "next/image";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardHeader>
          <Image src={service.icon} width={50} height={50} className="w-6 h-6 text-primary" alt={""} />
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
        <p className="text-sm  text-muted-foreground">{service.description}</p>
      </CardContent>
    </Card>
  );
}