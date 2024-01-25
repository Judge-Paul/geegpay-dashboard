import React, { SVGProps } from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  // active?: boolean;
  color?: string;
}

const Dashboard: React.FC<Props> = ({ className, color }) => {
  return (
    <svg
      className={cn("size-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={color}
        d="M7.24 2h-1.9C3.15 2 2 3.15 2 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C10.57 3.15 9.42 2 7.24 2z"
      ></path>
      <path
        fill={color}
        d="M18.67 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C22 3.15 20.85 2 18.67 2z"
        opacity="0.4"
      ></path>
      <path
        fill={color}
        d="M18.67 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33z"
      ></path>
      <path
        fill={color}
        d="M7.24 13.43h-1.9C3.15 13.43 2 14.58 2 16.76v1.9C2 20.85 3.15 22 5.33 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34z"
        opacity="0.4"
      ></path>
    </svg>
  );
};

const Analytics: React.FC<Props> = ({ className, color }) => {
  return (
    <svg
      className={cn("size-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        // stroke={active ? "#0D062D" : "#B2ABAB"}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.17 12l-.47-.7-3.2 3.2M16.5 9.5l-1.51 1.51L14 12M14.5 9.5h2v2"
      ></path>
    </svg>
  );
};

const Users: React.FC<Props> = ({ className, color }) => {
  return (
    <svg
      className={cn("size-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.68 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 01-4.27-4.43C4.56 3.99 6.54 2 9 2M16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 00-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0zM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
      ></path>
    </svg>
  );
};

const Inventory: React.FC<Props> = ({ className, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.17 7.44L12 12.55l8.77-5.08M12 21.61v-9.07"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.39 9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.97c1.14-.63 3.01-.63 4.15 0l5.34 2.97c1.21.67 2.2 2.35 2.2 3.73v5.65c0 1.38-.99 3.06-2.2 3.73l-5.34 2.97c-1.14.63-3.01.63-4.15 0l-5.34-2.97c-1.21-.67-2.2-2.35-2.2-3.73V14"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17 13.24V9.58l-6.07-3.51-1.05-.6L7.51 4.1"
      ></path>
    </svg>
  );
};

const Promotions: React.FC<Props> = ({ className, color }) => {
  return (
    <svg
      className={cn("size-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.66 20.01l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47H6.08c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6M9.34 3.99l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6M9 15l6-6"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14.495 14.5h.009M9.495 9.5h.008"
      ></path>
    </svg>
  );
};

const Info: React.FC<Props> = ({ className, color }) => {
  return (
    <svg
      className={cn("size-6", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8v5M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.995 16h.009"
      ></path>
    </svg>
  );
};

export { Dashboard, Analytics, Users, Inventory, Promotions, Info };
