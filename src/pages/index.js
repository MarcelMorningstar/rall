import Layout from "./layout"
import Link from "next/link"
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import CarouselHeader from "@/components/CarouselHeader"
import Worker from "@/components/Worker"

export default function Home() {
  const { t } = useTranslation()

  return (
    <Layout>
      <CarouselHeader t={t} />

      <section id="about">
        <h2>{t("common:section2")}</h2>

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-[45%]">
            <p className="text-justify">{ t("home:about-description") }</p>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8 w-full lg:w-[55%]">
            <div className="flex flex-col items-center">
              <Image src="/icons/human.png" width={100} height={100} alt="rall workers"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about1") }</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/march.png" width={100} height={100} alt="rall established in"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about2") }</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/truck.png" width={100} height={100} alt="rall trucks"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about3") }</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/buildings.png" width={100} height={100} alt="rall buildings"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about4") }</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('/images/bg1.jpg')" }} />

      <section id="services" className="max-xl:px-0">
        <h2>{t("common:section1")}</h2>

        <div id="shipping" className="relative flex flex-row items-center xl:items-start gap-8 xl:py-12">
          <div className="relative flex-[2] h-96">
            <Image src='/images/shipping.png' className="object-cover" fill alt='rall shiping' />
          </div>
          <div className="absolute left-0 z-10 xl:static flex-[1] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent">
            <h3 className="text-background xl:text-primary">{ t("common:subsection1") }</h3>
            <p className=" text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("home:service1") }</p>
          </div>
        </div>

        <div id="dump-trucks" className="relative flex flex-row items-center xl:items-start gap-8 xl:py-12">
          <div className="absolute right-0 z-10 xl:static flex-[1] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent">
            <h3 className="text-right text-background xl:text-primary">{ t("common:subsection2") }</h3>
            <p className="text-right text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("home:service2") }</p>
          </div>
          <div className="relative flex-[2] h-96">
            <Image src='/images/dump-truck.jpg' className="object-cover" fill alt='rall shiping' />
          </div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('/images/bg2.jpg')" }} />

      <section id="contact">
        <h2>{t("common:section3")}</h2>

        <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-8">
          <Worker image="p.jpg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
          <Worker image="p.jpg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
          <Worker image="p.jpg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
        </div>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4478106.893429736!2d25.408669955440143!3d56.767423135554246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2160751325b9d%3A0x92480e3af5b843de!2sRall%20%2C%20SIA!5e0!3m2!1sen!2slv!4v1692030117310!5m2!1sen!2slv" className="w-full h-80" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Layout>
  )
}
