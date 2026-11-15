export default function WhatIsHD() {
  return (
    <section
      id="section-2"
      aria-labelledby="what-is-hd-title"
      className="relative isolate w-full overflow-hidden bg-[#89D6F5] font-[family-name:var(--font-metropolis)] min-h-[340px] aspect-[444/602] md:aspect-[815/484]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 top-[8%] bottom-0 md:top-0 bg-[url('/Images/Registration/WhatIsHDMobile.svg')] bg-[length:100%_auto] bg-top bg-no-repeat md:bg-[url('/Images/Registration/WhatIsHD.svg')]" />
        <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[url('/Images/Registration/BottomRoadMobile.svg')] bg-cover bg-left-bottom md:h-[52%] md:bg-[url('/Images/Registration/BottomRoad.svg')] md:bg-[length:100%_100%]" />
      </div>

      <div className="absolute right-[10%] top-[11%] w-[48%] text-left md:top-[16.5%] md:w-1/3">
        <p className="text-[color:var(--text-dark)] !text-[length:clamp(var(--type-subtitle-2-size),4.5vw,var(--type-subtitle-1-size))] !leading-[var(--type-line-height)] tracking-[var(--type-letter-spacing)] md:!text-[length:clamp(var(--type-subtitle-1-size),2.75vw,var(--type-header-3-size))]">
          One of the <strong>largest collegiate hackathons</strong> in
          California where over 950 students, creators, and leaders come
          together to <strong>create for social good</strong>.
        </p>
      </div>
    </section>
  );
}
