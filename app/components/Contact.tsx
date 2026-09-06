"use client";

import { SITE_META } from "@/lib/data";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 lg:py-48 px-6 lg:px-12 bg-[#0a0a0a] border-t border-[#222222]">
      <div className="max-w-[800px] mx-auto flex flex-col justify-start">

        <span className="text-[10px] font-mono tracking-widest text-[#666666] mb-4">04</span>
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#a67c1e] mb-8">CONTACT</span>

        <h2 className="text-[clamp(48px,6vw,80px)] font-light leading-[0.95] tracking-tight text-[#ffffff] mb-12">
          GET IN<br />TOUCH
        </h2>

        <p className="text-lg lg:text-xl text-[#aaaaaa] font-light max-w-md mb-16 leading-relaxed">
          Have a cinema AV project, technical requirement, or professional opportunity?
        </p>

        <div className="space-y-6">
          <a
            href={`mailto:${SITE_META.contact.email}`}
            className="block text-lg lg:text-xl text-[#ffffff] hover:text-[#a67c1e] transition-colors border-b border-[#333333] pb-2 w-max"
          >
            {SITE_META.contact.email}
          </a>

          <a
            href={SITE_META.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg lg:text-xl text-[#ffffff] hover:text-[#a67c1e] transition-colors border-b border-[#333333] pb-2 w-max"
          >
            LinkedIn ↗
          </a>

          <div className="pt-4">
            <span className="block text-[10px] uppercase tracking-widest text-[#666666] mb-1">Phone</span>
            <a
              href={`tel:${SITE_META.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="text-lg lg:text-xl text-[#ffffff] hover:text-[#a67c1e] transition-colors border-b border-[#333333] pb-2 w-max"
            >
              {SITE_META.contact.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
