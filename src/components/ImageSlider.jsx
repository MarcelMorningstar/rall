import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({ images }) {
    const settings = {
        dots: false,
        arrows: false,
        draggable: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 5000,
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
            {
                images.map(image => (
                    <div key={image} className="relative h-80">
                        <img src={`/images/${image}`} className="w-full h-full px-1.5 object-cover" loading="eager" alt="rall contruction" />
                    </div>
                ))
            }
        </Slider>
    )
}
