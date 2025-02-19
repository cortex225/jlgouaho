"use client";
import { useCurrentLocale, useChangeLocale } from "@/app/locales/client";

export const LocaleSelect = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      value={currentLocale}
      onChange={(e) => changeLocale(e.target.value as "fr" | "en")}
      className="h-9 max-w-[80px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 capitalize">
      <option value="en" className="text-base ">
        EN
      </option>
      <option value="fr" className="text-base ">
        FR
      </option>
    </select>
  );
};
