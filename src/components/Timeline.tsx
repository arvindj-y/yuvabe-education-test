"use client";

import Image from "next/image";

export default function TransformationJourney() {
  return (
    <section className="flex flex-col items-center justify-center px-6 md:px-16 py-12 bg-[#FDF8EE]">
      <h2 className="text-3xl md:text-[64px] font-semibold text-black mb-24 text-center">
        Transformation Journey
      </h2>

      <div className="relative w-full flex justify-center">
        <Image
          src="/images/home/timeline.svg"
          alt="Transformation Journey Wave"
          width={1000}
          height={300}
          className="w-full h-auto"
        />

        {/* Dots with Labels */}
        <div className="absolute inset-0 flex justify-between items-center text-center text-sm md:text-base">
          <div className="absolute left-[10%] bottom-[50%] flex flex-col items-center">
            <span className="font-semibold">7-14 Yrs</span>
            <span className="text-[#592AC7]">STEAM</span>
            <div className="w-4 h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
          <div className="absolute left-[35%] bottom-[50%] flex flex-col items-center mb-6">
            <span className="font-semibold">18-22 Yrs</span>
            <span className="text-[#592AC7]">BRIDGE</span>
            <div className="w-4 h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
          <div className="absolute left-[60%] bottom-[70%] flex flex-col items-center">
            <span className="font-semibold">22 Yrs +</span>
            <span className="text-[#592AC7]">STUDIOS</span>
            <div className="w-4 h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
          <div className="absolute left-[85%] bottom-[95%] flex flex-col items-center">
            <span className="font-semibold">25 Yrs +</span>
            <span className="text-[#592AC7]">START - UPS</span>
            <div className="w-4 h-4 bg-[#592AC7] rounded-full mb-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
