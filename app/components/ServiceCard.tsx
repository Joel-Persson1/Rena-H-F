"use client";

import { ReactNode } from "react";

import { CheckCircle, Clock, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import Image, { StaticImageData } from "next/image";

const ServiceCard = ({
  mainIcon,
  titleIcon,
  title,
  description,
  list,
  time,
  cta,
}: {
  mainIcon: StaticImageData;
  titleIcon: ReactNode;
  title: string;
  description: string;
  list: string[];
  time: string;
  cta: string;
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card className="group hover:shadow-fresh transition-all duration-300 border-border">
      <CardHeader className="text-center pb-4">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-primary-light p-4">
          <Image
            src={mainIcon}
            alt="A icon of a window getting cleaned"
            width={20}
            height={20}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
          {titleIcon}
          {title}
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Vad som ingår:</h4>
          <div className="space-y-2">
            {list.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Tid: {time}</span>
        </div>

        <Button
          onClick={() => scrollToSection("kontakt")}
          variant="default"
          className="w-full"
        >
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
