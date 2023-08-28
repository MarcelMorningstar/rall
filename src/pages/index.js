import React, { useEffect, useState } from "react";
import Layout from "./layout"
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import CarouselHeader from "@/components/CarouselHeader"
import Worker from "@/components/Worker"
import { motion } from 'framer-motion'

export default function Home() {
  const { t } = useTranslation()
  const [dimensions, setDimensions] = useState(null)

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  const container2 = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const container5 = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };


  return (
    <Layout>
      <CarouselHeader t={t} />

      <section id="about">
        <h2>{t("common:section2")}</h2>

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-12">
          {
            dimensions && (
              dimensions.width > 1023 ? (
                <motion.div 
                  className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-[45%]"
                  initial={{ x: -250, opacity: 0, scale: 0 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1, transition: { duration: .5 } }}
                >
                  <p className="text-justify">{ t("home:about-description") }</p>
                </motion.div>
              ) : (
                <motion.div 
                  className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-[45%]"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { duration: .4 } }}
                >
                  <p className="text-justify">{ t("home:about-description") }</p>
                </motion.div>
              )
            )
          }

          <motion.div 
            className="flex flex-row flex-wrap items-center justify-center gap-10 w-full lg:w-[55%]"
            variants={container2}
            initial="hidden"
            whileInView="visible"
          >
            <motion.div className="flex flex-col items-center" variants={item}>
              <Image src="/icons/human.png" width={100} height={100} alt="rall workers"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about1") }</span>
              <span className="text-center text-3xl font-bold text-primary">80+</span>
            </motion.div>
            <motion.div className="flex flex-col items-center" variants={item}>
              <Image src="/icons/march.png" width={100} height={100} alt="rall established in"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about2") }</span>
              <span className="text-center text-3xl font-bold text-primary">1996</span>
            </motion.div>
            <motion.div className="flex flex-col items-center" variants={item}>
              <Image src="/icons/truck.png" width={100} height={100} alt="rall trucks"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about3") }</span>
              <span className="text-center text-3xl font-bold text-primary">30+</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('/images/bg1.jpg')" }} />

      <section id="services" className="max-xl:px-0">
        <h2>{t("common:section1")}</h2>

        <div id="shipping" className="relative flex flex-row items-center xl:items-start gap-8 xl:py-12">
          <div className="relative z-0 xl:z-20 flex-[1.8] h-96">
            <Image src='/images/shipping.png' className="object-cover" fill alt='rall shiping' />
          </div>
          {
            dimensions && (
              dimensions.width > 1279 ? (
                <motion.div 
                  className="absolute left-0 z-10 xl:static flex-[1.2] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent"
                  initial={{ x: -500, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
                >
                  <h3 className="text-background xl:text-primary">{ t("common:subsection1") }</h3>
                  <p className=" text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("home:service1") }</p>
                </motion.div>
              ) : (
                <motion.div 
                  className="absolute left-0 z-10 xl:static flex-[1.2] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent"
                  initial={dimensions.width > 699 ? { x: -500, opacity: 0 } : { x: -220, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
                >
                  <h3 className="text-background xl:text-primary">{ t("common:subsection1") }</h3>
                  <p className=" text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("home:service1") }</p>
                </motion.div>
              )
            )
          }
          
        </div>

        <div id="dump-trucks" className="relative flex flex-row items-center xl:items-start gap-8 xl:py-12">
          {
            dimensions && (
              dimensions.width > 1279 ? (
                <motion.div 
                  className="absolute right-0 z-10 xl:static flex-[1.2] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent"
                  initial={{ x: 500, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
                >
                  <h3 className="text-right text-background xl:text-primary">{ t("common:subsection2") }</h3>
                  <p className="text-right text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("home:service2") }</p>
                </motion.div>
              ) : (
                <motion.div 
                  className="absolute right-0 z-10 xl:static flex-[1.2] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent"
                  initial={dimensions.width > 699 ? { x: 500, opacity: 0 } : { x: 220, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1, transition: { duration: .5 } }}
                >
                  <h3 className="text-right text-background xl:text-primary">{ t("common:subsection2") }</h3>
                  <p className="text-right text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("home:service2") }</p>
                </motion.div>
              )
            )
          }
          <div className="relative z-0 xl:z-20 flex-[1.8] h-96">
            <Image src='/images/dump-truck.jpg' className="object-cover" fill alt='rall shiping' />
          </div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('/images/bg2.jpg')" }} />

      <section id="work">
        <h2>{t("common:section3")}</h2>

        <div>
          
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('/images/bg3.jpg')" }} />

      <section id="contact">
        <h2>{t("common:section4")}</h2>

        <motion.div 
          className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-8"
          variants={container5}
          initial="hidden"
          whileInView="visible"
        >
          <Worker image="p.jpg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
          <Worker image="p.jpg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
          <Worker image="p.jpg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
        </motion.div>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4478106.893429736!2d25.408669955440143!3d56.767423135554246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2160751325b9d%3A0x92480e3af5b843de!2sRall%20%2C%20SIA!5e0!3m2!1sen!2slv!4v1692030117310!5m2!1sen!2slv" className="w-full h-80" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Layout>
  )
}
