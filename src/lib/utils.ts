import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Locale = "en" | "fr";

// Frontmatter dates are plain "YYYY-MM-DD" strings. Parsing them as UTC and
// formatting in UTC avoids the off-by-one-day shift in negative-offset timezones.
export function formatDate(date: string, locale: Locale = "en") {
  const iso = date.includes("T") ? date : `${date}T00:00:00Z`;
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function formatDateShort(date: string, locale: Locale = "en") {
  const iso = date.includes("T") ? date : `${date}T00:00:00Z`;
  return new Date(iso).toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
