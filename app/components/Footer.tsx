"use client";

import { SITE_META } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-[#222222] bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-[#666666]">
        <span>
          © {new Date().getFullYear()} {SITE_META.name} · AV Engineer
        </span>
        <span className="text-xs">
          Engineered with precision for cinema excellence
        </span>
      </div>
    </footer>
  );
};
