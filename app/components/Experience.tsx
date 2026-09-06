"use client";

import { useState } from "react";
import { CAREER } from "@/lib/data";

export const Experience = () => {
  const [openId, setOpenId] = useState<string | null>("pvr-inox");

  return (
    <section id="experience" className="py-24 lg:py-40 px-6 lg:px-12 bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

        {/* Title side */}
        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-[#000000]">Experience</h2>
        </div>

        {/* Content side */}
        <div className="md:col-span-8 max-w-[800px]">
          <div className="border-t border-[#000000]">
            {CAREER.map((item) => (
              <div key={item.id} className="border-b border-[#e5e5e5]">
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full text-left py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 focus:outline-none group"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-[#000000] group-hover:text-[#a67c1e] transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-sm text-[#666666] mt-2">
                      {item.role}
                    </p>
                  </div>
                  <div className="text-[11px] font-mono tracking-widest uppercase text-[#a0a0a0] sm:text-right">
                    {item.period}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openId === item.id ? 'max-h-[800px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-4 sm:pl-8 border-l border-[#e5e5e5] space-y-3">
                    {item.responsibilities.map((resp, i) => (
                      <p key={i} className="text-sm text-[#666666] leading-relaxed">
                        — {resp}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
