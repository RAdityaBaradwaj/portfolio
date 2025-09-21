"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{
      opacity: isExpanded ? 1 : 0,
      height: isExpanded ? "auto" : 0,
    }}
    transition={{
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed space-y-2 max-w-prose"
  >
    <p>
      At <strong>Postman</strong>, I worked as a Software Engineer
      on the API Client and core infrastructure, delivering features used by
      millions of developers worldwide. I helped shape major products including:
    </p>
    <ul className="list-disc pl-4">
      <li>
        <strong>Package Library</strong> (reusable scripts) and Request File
        Uploads, addressing highly requested code reusability features and
        resolving 30%+ of public GitHub issues.
      </li>
      <li>
        <strong>A new API Client experience</strong>, built with JavaScript, TypeScript, Node.js,
        and React, integrated into Postman’s web and desktop applications.
      </li>
      <li>
        <strong>The performance testing suite</strong>: a multi-threaded Electron app with
        efficient inter-process communication to simulate hundreds of concurrent
        API agents, enabling 500+ virtual users on mid-range hardware.
      </li>
      <li>
        <strong>Cloud infrastructure improvements</strong>: designed Kubernetes + Docker
        pipelines on AWS, doubling deployment speed compared to Elastic Beanstalk
        while improving reliability and scalability.
      </li>
    </ul>
    <p>
      Throughout, I applied modern practices around microservices,
      observability, fault tolerance, and resource optimization to ensure
      secure, scalable systems. My work combined product development with
      infrastructure engineering, bridging frontend experiences and backend
      reliability.
    </p>
  </motion.div>
)}

        </div>
      </Card>
    </Link>
  );
};
