import { Carousel } from "@material-tailwind/react";
import { useWindowDimensions } from "@/utilities/window";

export default function CarouselHeader({ t }) {
    const dimensions = useWindowDimensions()

    return (
        <div className="relative w-full transition-all" style={dimensions.width > 1000 ? { height: 'calc(100vh - 111px)' } : dimensions.width > 613 ? { height: 'calc(70vh - 111px)' } : { height: 'calc(50vh - 111px)' }}>
            <Carousel autoplay autoplayDelay={7000} transition={{ duration: 1.2 }} loop navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}>
                <div className="relative w-full h-full">
                    <img src='/images/shipping-header.jpg' className="w-full h-full object-cover" loading="eager" alt="rall" />
                    <div className="absolute bottom-12 lg:bottom-16 right-[6vw] ml-[10vw]">
                        <h1 className="text-right font-bold text-background" style={{ fontSize: 'clamp(1rem, 0.1795rem + 4.1026vw, 3rem)', lineHeight: 'clamp(1.125rem, 0.3045rem + 4.1026vw, 3.125rem)', textShadow: '0 1px 6px rgba(255, 255, 255, 0.5)' }}>{ t("home:title1") }</h1>
                        <h1 className="text-right font-bold text-primary" style={{ fontSize: 'clamp(0.875rem, 0.4135rem + 2.3077vw, 2rem)', lineHeight: 'clamp(0.875rem, 0.4135rem + 2.3077vw, 2rem)', textShadow: '0 1px 6px rgba(255, 255, 255, 0.2)' }}>{ t("home:subtitle1") }</h1>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <img src='/images/dump-truck-header.jpg' className="w-full h-full object-cover" loading="eager" alt="rall" />
                    <div className="absolute bottom-12 lg:bottom-16 right-[6vw] ml-[10vw]">
                        <h1 className="text-right font-bold text-primary" style={{ fontSize: 'clamp(1rem, 0.1795rem + 4.1026vw, 3rem)', lineHeight: 'clamp(1.125rem, 0.3045rem + 4.1026vw, 3.125rem)', textShadow: '0 1px 6px rgba(255, 255, 255, 0.5)' }}>{ t("home:title2") }</h1>
                        <h1 className="text-right font-bold text-background" style={{ fontSize: 'clamp(0.875rem, 0.4135rem + 2.3077vw, 2rem)', lineHeight: 'clamp(0.875rem, 0.4135rem + 2.3077vw, 2rem)', textShadow: '0 1px 6px rgba(255, 255, 255, 0.2)' }}>{ t("home:subtitle2") }</h1>
                    </div>
                </div>
            </Carousel>

            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-8 sm:h-10 lg:h-14 rotate-180 transition-all"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-background"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-background"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-background"></path></svg>
        </div>
    )
}
