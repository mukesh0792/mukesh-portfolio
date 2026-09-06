"use client";

const EXPERTISES = [
  "Digital Cinema Projection",
  "Laser Projection",
  "Cinema Sound",
  "AV Troubleshooting",
  "Multi-Site Operations",
  "Team Leadership",
];

export const Expertise = () => {
  return (
    <section id="expertise" className="py-24 lg:py-40 px-6 lg:px-12 bg-[#ffffff]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">

        <div className="md:col-span-4">
          <h2 className="text-xl font-medium tracking-tight text-[#000000]">Expertise</h2>
        </div>

        <div className="md:col-span-8 max-w-[800px]">
          <div className="flex flex-col border-t border-[#e5e5e5]">
            {EXPERTISES.map((item, idx) => (
              <div key={item} className="flex flex-col sm:flex-row sm:items-center py-6 border-b border-[#e5e5e5] group hover:bg-[#fafafa] transition-colors -mx-6 px-6 cursor-default">
                <span className="text-[11px] font-mono tracking-widest text-[#a0a0a0] w-12 sm:w-16">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-xl md:text-2xl font-light tracking-tight text-[#000000] group-hover:text-[#a67c1e] transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
