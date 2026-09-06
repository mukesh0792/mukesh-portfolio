"use client";

import { TECHNICAL_JOURNAL } from "@/lib/data";

export const Journal = () => {
  return (
    <section id="journal" className="py-24 lg:py-40 px-6 lg:px-12 bg-[#fafafa] border-t border-[#e5e5e5]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-[#000000]">Technical Journal</h2>
          <p className="text-sm text-[#666666] mt-2 font-light">
            Field notes, engineering practices & operational methodologies.
          </p>
        </div>

        <div className="md:col-span-8 max-w-[800px]">
          <div className="border-t border-[#000000]">
            {TECHNICAL_JOURNAL.map((article) => (
              <article
                key={article.id}
                className="py-8 border-b border-[#e5e5e5] group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] uppercase tracking-widest font-mono text-[#a0a0a0]">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#d0d0d0]">&bull;</span>
                  <span className="text-xs text-[#a0a0a0]">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-light tracking-tight text-[#000000] group-hover:text-[#a67c1e] transition-colors mb-3">
                  {article.title}
                </h3>

                <p className="text-sm text-[#666666] leading-relaxed max-w-[680px]">
                  {article.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-[#888888] font-light"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
