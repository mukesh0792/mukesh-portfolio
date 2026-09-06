"use client";

import { CERTIFICATIONS } from "@/lib/data";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 lg:py-40 px-6 lg:px-12 bg-[#ffffff] border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-[#000000]">Certifications</h2>
          <p className="text-sm text-[#666666] mt-2 font-light">
            Authorized OEM trainings & professional credentials.
          </p>
        </div>

        <div className="md:col-span-8 max-w-[800px]">
          <div className="border-t border-[#000000]">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="py-6 border-b border-[#e5e5e5] flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 group hover:bg-[#fafafa] transition-colors -mx-4 px-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 bg-[#f0f0f0] text-[#666666] rounded-sm">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-[#a0a0a0] font-light">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-lg font-normal text-[#000000] group-hover:text-[#a67c1e] transition-colors">
                    {cert.title}
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#a0a0a0] sm:text-right shrink-0">
                  {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
