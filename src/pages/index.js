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

      <section>
        <h2>{t("common:section1")}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center w-auto h-32"><Image src="/icons/truck.png" width={100} height={100} alt="rall international shipping" /></div>
            <span className="text-center text-3xl font-bold whitespace-nowrap capitalize text-foreground">{t("common:subsection1")}</span>
            <p className="text-center line-clamp-3">{ t("home:service1") }</p>
            <Link href="/shipping" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-primary hover:text-secondary hover:bg-primary border-[3px] border-primary">{ t("home:button") }</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center w-auto h-32"><Image src="/icons/dump-truck.png" width={120} height={120} alt="rall dump trucks" /></div>
            <span className="text-center text-3xl font-bold whitespace-nowrap capitalize text-foreground">{t("common:subsection2")}</span>
            <p className="text-center line-clamp-3">{ t("home:service2") }</p>
            <Link href="/dump-trucks" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-primary hover:text-secondary hover:bg-primary border-[3px]	 border-primary">{ t("home:button") }</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center w-auto h-32"><Image src="/icons/constraction.png" width={120} height={120} alt="rall cunstruction" /></div>
            <span className="text-center text-3xl font-bold whitespace-nowrap capitalize text-foreground">{t("common:subsection3")}</span>
            <p className="text-center line-clamp-3">{ t("home:service3") }</p>
            <Link href="/construction" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-primary hover:text-secondary hover:bg-primary border-[3px]	 border-primary">{ t("home:button") }</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center w-auto h-32"><Image src="/icons/office.png" width={120} height={120} alt="rall rent" /></div>
            <span className="text-center text-3xl font-bold whitespace-nowrap capitalize text-foreground">{t("common:subsection4")}</span>
            <p className="text-center line-clamp-3">{ t("home:service4") }</p>
            <Link href="/rent" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-primary hover:text-secondary hover:bg-primary border-[3px]	 border-primary">{ t("home:button") }</Link>
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
