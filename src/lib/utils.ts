import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface chartData {
  name: string;
  total: number;
}

export function getMonthlyData(): chartData[] {
  const currentDate = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - i);

    const month = newDate.toLocaleString("default", { month: "short" });
    const year = newDate.getFullYear().toString();
    const formattedMonth = `${month} ${year[2]}${year[3]}`;

    const total = Math.floor(Math.random() * 40000) + 10000;
    result.push({ name: formattedMonth, total });
  }

  return result.reverse();
}

export function getWeeklyData(): chartData[] {
  const currentDate = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - i * 7);

    const month = newDate.toLocaleString("default", { month: "short" });
    const day = newDate.getDate();
    const formattedDate = `${month} ${day}`;

    const total = Math.floor(Math.random() * 10000) + 2000;
    result.push({ name: formattedDate, total });
  }

  return result.reverse();
}

export function getDailyData(): chartData[] {
  const currentDate = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - i);

    const month = newDate.toLocaleString("default", { month: "short" });
    const day = newDate.getDate();
    const formattedDate = `${month} ${day}`;

    const total = Math.floor(Math.random() * 1300) + 50;
    result.push({ name: formattedDate, total });
  }

  return result.reverse();
}
