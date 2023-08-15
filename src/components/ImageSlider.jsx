'use client'

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        speed: 12000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 0,
                    infinite: true,
                    autoplay: true,
                    speed: 10000,
                    autoplaySpeed: 0,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    autoplay: true,
                    speed: 8000,
                    autoplaySpeed: 0,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true,
                    autoplay: true,
                    speed: 7000,
                    autoplaySpeed: 0,
                    cssEase: "linear",
                }
            },
        ]
    };

    return (
        <Slider className="overflow-hidden" {...settings}>
            <div className="relative h-80">
                <Image src="/images/c2.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
            <div className="relative h-80" style={{ width: 200 }}>
                <Image src="/images/c3.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c4.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c5.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c1.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c6.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c7.jpg" className="object-cover" fill loading="eager" alt="rall contruction" />
            </div>
        </Slider>
    )
}
