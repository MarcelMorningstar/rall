import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
    const settings = {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Slider {...settings}>
            <div className="relative h-80">
                <Image src="/images/c2.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
            <div className="relative h-80" style={{ width: 200 }}>
                <Image src="/images/c3.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c4.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c5.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c1.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c6.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
            <div className="relative h-80">
                <Image src="/images/c7.jpg" className="object-cover" fill priority alt="rall contruction" />
            </div>
        </Slider>
    )
}
