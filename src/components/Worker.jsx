import { useState } from "react";
import Image from "next/image"
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion } from 'framer-motion'

export default function Worker({ image, name, position, email, phone }) {
    const [hover, setHover] = useState(false)

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };
      
    return (
        <motion.div className="flex flex-col items-center gap-1" variants={item}>
            <div className="relative w-40 md:w-48 h-40 md:h-48 rounded-full transition-all" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Image src={`/images/${image}`} fill sizes="192px" className="rounded-full object-cover" alt="rall worker" />
                {
                    (email && phone) && (
                        <div className={`absolute top-0 flex flex-col items-center justify-between w-full h-full bg-black/50 rounded-full transition-all duration-500 ${ hover ? 'visible opacity-100' : 'invisible opacity-0' }`}>
                            <a href={`mailto:${email}`} className="flex flex-col items-center justify-around w-full h-full text-background hover:text-secondary transition-all duration-500">
                                <HiOutlineMail className="w-5 md:w-6 h-5 md:h-6 text-inherit" />
                                <span className="text-sm md:text-base font-medium text-inherit">{ email }</span>
                            </a>
                            <div className="w-3/4 h-1 bg-background"></div>
                            <a href={`tel:${phone}`} className="flex flex-col items-center justify-around w-full h-full text-background hover:text-secondary transition-all duration-500">
                                <span className="text-sm md:text-base font-medium text-inherit">{ phone }</span>
                                <HiOutlinePhone className="w-5 md:w-6 h-5 md:h-6 text-inherit" />
                            </a>
                        </div>
                    )
                }
            </div>
            <span className="text-2xl md:text-3xl font-semibold whitespace-nowrap text-foreground transition-all">{ name }</span>
            <span className="text-xl md:text-2xl font-medium whitespace-nowrap text-foreground/90 transition-all">{ position }</span>
        </motion.div>
    )
}
