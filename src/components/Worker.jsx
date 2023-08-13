'use client'

import { useState } from "react";
import Image from "next/image"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Worker({ image, name, position, email, phone }) {
    const [hover, setHover] = useState(false)

    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative w-48 h-48 rounded-full" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Image src={`/images/${image}`} fill className="rounded-full object-cover" alt="rall worker" />
                {
                    (email && phone) && (
                        <div className={`absolute flex flex-col items-center justify-between w-full h-full bg-black/50 rounded-full transition-all duration-500 ${ hover ? 'opacity-100' : 'opacity-0' }`}>
                            <a href={`mailto:${email}`} className="flex flex-col items-center justify-around w-full h-full text-background hover:text-secondary transition-all duration-500">
                                <HiOutlineMail className="w-6 h-6  text-inherit" />
                                <span className="text-base font-medium text-inherit">{ email }</span>
                            </a>
                            <div className="w-3/4 h-1 bg-background"></div>
                            <a href={`tel:${phone}`} className="flex flex-col items-center justify-around w-full h-full text-background hover:text-secondary transition-all duration-500">
                                <span className="text-base font-medium text-inherit">{ phone }</span>
                                <HiOutlinePhone className="w-6 h-6 text-inherit" />
                            </a>
                        </div>
                    )
                }
            </div>
            <span className="text-3xl font-semibold whitespace-nowrap text-foreground">{ name }</span>
            <span className="text-2xl font-medium whitespace-nowrap text-foreground/90">{ position }</span>
        </div>
    )
}
