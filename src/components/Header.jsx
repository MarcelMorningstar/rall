'use client'

import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

export default function Header({ images, title }) {
  return (
    <div className="relative w-full h-[70vh]">
        {
            images.length > 1 ? (
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
                    <img key={images[0]} src={`/images/${images[0]}`} className="w-full h-full object-cover" loading="eager" alt="rall" />
                    <img key={images[1]} src={`/images/${images[1]}`} className="w-full h-full object-cover" loading="eager" alt="rall" />
                    <img key={images[2]} src={`/images/${images[2]}`} className="w-full h-full object-cover" loading="eager" alt="rall" />
                    <img key={images[3]} src={`/images/${images[3]}`} className="w-full h-full object-cover" loading="eager" alt="rall" />
                </Carousel>
            ) : (
                <Image src={`/images/${images[0]}`} className="object-cover" fill priority alt='rall' />
            )
        }
        
        {
            title && (
                <h1 className="absolute bottom-9 left-1/2 -translate-x-1/2 text-center font-bold text-primary" style={{ fontSize: 'clamp(1.5rem, 1.08rem + 2.4vw, 3rem)', lineHeight: 'clamp(1.5rem, 1.08rem + 2.4vw, 3rem)', textShadow: '0 2px 4px var(--foreground)' }}>{ title }</h1>
            )
        }
        
    </div>
  )
}
