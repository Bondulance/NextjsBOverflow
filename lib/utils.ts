import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks >= 2) {
    return `${weeks} weeks ago`;
  } else if (weeks === 1) {
    return "one week ago";
  } else if (days >= 2) {
    return `${days} days ago`;
  } else if (days === 1) {
    return "yesterday";
  } else if (hours >= 2) {
    return `${hours} hours ago`;
  } else if (hours === 1) {
    return "an hour ago";
  } else if (minutes >= 2) {
    return `${minutes} minutes ago`;
  } else if (minutes === 1) {
    return "a minute ago";
  } else {
    return "just now";
  }
};

export const formatBigNumber = (num: number): string => {
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

// 1.5 million
