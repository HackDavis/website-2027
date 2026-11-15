export default function WhatIsHD() {
  return (
    <section
      id="section-2"
      aria-labelledby="what-is-hd-title"
      className="relative isolate w-full overflow-hidden bg-[#89D6F5] font-[family-name:var(--font-metropolis)] md:aspect-[1086/598]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-[20%] h-[85%] bg-[url('/Images/Registration/WhatIsHD.svg')] bg-[length:auto_100%] bg-[position:37%_top] bg-no-repeat md:top-[-5%] md:h-full md:bg-[length:100%_auto] md:bg-top" />
        <div className="absolute inset-x-0 bottom-0 h-[29%] bg-[url('/Images/Registration/BottomRoad.svg')] bg-cover bg-left-bottom md:h-[52%] md:bg-[length:100%_100%]" />
      </div>

      <div className="px-6 pt-8 pb-[82vw] md:absolute md:top-[12%] md:left-[53.5%] md:w-[35%] md:p-0">
        <h2
          id="what-is-hd-title"
          className="mb-3 !text-2xl font-bold md:sr-only"
        >
          What is HackDavis?
        </h2>
        <p className="!text-base leading-tight md:!text-[2.05vw]">
          One of the <strong>largest collegiate hackathons</strong> in
          California where over 950 students, creators, and leaders come
          together to <strong>create for social good</strong>.
        </p>
      </div>
    </section>
  );
}
