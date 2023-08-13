'use client'

import { Carousel } from "@material-tailwind/react";

export default function Header() {
  return (
    <div className="relative w-full h-[70vh]">
        <Carousel autoplay autoplayDelay={7000} transition={{ duration: 1.2 }} loop navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        )}>
            <img src="/images/shipping.jpg" className="w-full h-full object-cover" loading="eager" alt="rall" />
            <img src="/images/trucks.jpg" className="w-full h-full object-cover" loading="eager" alt="rall" />
            <img src="/images/shipping.jpg" className="w-full h-full object-cover" loading="eager" alt="rall" />
            <img src="/images/trucks.jpg" className="w-full h-full object-cover" loading="eager" alt="rall" />
        </Carousel>
    </div>
  )
}
