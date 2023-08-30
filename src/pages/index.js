import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "@/utilities/window";
import Layout from "./layout"
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import CarouselHeader from "@/components/CarouselHeader"
import Card from "@/components/Card";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { t } = useTranslation()
  const dimensions = useWindowDimensions()
  const [IconContainer, setIconContainer] = useState(null)
  const ServiceAnimation1 = useAnimation()
  const ServiceAnimation2 = useAnimation()
  const [ServiceRef1, Service1inView] = useInView({ threshold: 0.6 })
  const [ServiceRef2, Service2inView] = useInView({ threshold: 0.6 })

  useEffect(() => {
    if (dimensions) {
      if (dimensions.width > 1023) {
        setIconContainer({
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.2
            }
          }
        })
      } else {
        setIconContainer({
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.2
            }
          }
        })
      }
    }
  }, [dimensions]);

  useEffect(() => {
    if (dimensions) {
      if (Service1inView) {
        ServiceAnimation1.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        });
      } else {
        ServiceAnimation1.start(dimensions.width > 699 ? { x: -500, opacity: 0 } : { x: -220, opacity: 0 });
      }
    }
  }, [dimensions, ServiceAnimation1, Service1inView]);

  useEffect(() => {
    if (dimensions) {
      if (Service2inView) {
        ServiceAnimation2.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        });
      } else {
        ServiceAnimation2.start(dimensions.width > 699 ? { x: 500, opacity: 0 } : { x: 220, opacity: 0 });
      }
    }
  }, [dimensions, ServiceAnimation2, Service2inView]);

  const IconItem = {
    hidden: { y: 50, opacity: 0, scale: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  const CardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
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
                  transition={{ duration: .6 }}
                  whileInView={{ x: 0, opacity: 1, scale: 1 }}
                >
                  <p className="text-justify">{ t("home:about-description") }</p>
                </motion.div>
              ) : (
                <motion.div 
                  className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-[45%]"
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ duration: .4 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-justify">{ t("home:about-description") }</p>
                </motion.div>
              )
            )
          }

          {
            dimensions && (
              <motion.div 
                className="flex flex-row flex-wrap items-center justify-center gap-10 w-full lg:w-[55%]"
                variants={IconContainer}
                initial="hidden"
                whileInView="visible"
              >
                <motion.div className="flex flex-col items-center" variants={IconItem}>
                  <Image src="/icons/human.png" width={100} height={100} alt="rall workers"/>
                  <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about1") }</span>
                  <span className="text-center text-3xl font-bold text-primary">80+</span>
                </motion.div>
                <motion.div className="flex flex-col items-center" variants={IconItem}>
                  <Image src="/icons/march.png" width={100} height={100} alt="rall established in"/>
                  <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about2") }</span>
                  <span className="text-center text-3xl font-bold text-primary">1996</span>
                </motion.div>
                <motion.div className="flex flex-col items-center" variants={IconItem}>
                  <Image src="/icons/truck.png" width={100} height={100} alt="rall trucks"/>
                  <span className="text-center text-xl font-semibold whitespace-nowrap uppercase text-foreground">{ t("home:about3") }</span>
                  <span className="text-center text-3xl font-bold text-primary">30+</span>
                </motion.div>
              </motion.div>
            )
          }
          
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: "url('/images/bg1.jpg')" }} />

      <section id="services" className="max-xl:px-0">
        <h2>{t("common:section1")}</h2>

        <div ref={ServiceRef1} id="shipping" className="relative flex flex-row items-center xl:items-start gap-8 xl:py-12">
          <div className="relative z-0 xl:z-20 flex-[1.8] h-96 lg:h-80">
            <Image src='/images/shipping.jpg' className="object-cover" fill alt='rall shipping' />
          </div>
          {
            dimensions && (
              <motion.div 
                className="absolute left-0 z-10 xl:static flex-[1.2] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent"
                initial={dimensions.width > 699 ? { x: -500, opacity: 0 } : { x: -220, opacity: 0 }}
                animate={ServiceAnimation1}
              >
                <h3 className="text-background xl:text-primary">{ t("common:subsection1") }</h3>
                <p className=" text-background xl:text-black">{ t("home:service1") }</p>
              </motion.div>
            )
          }
          
        </div>

        <div ref={ServiceRef2} id="dump-trucks" className="relative flex flex-row items-center xl:items-start gap-8 xl:py-12">
          {
            dimensions && (
              <motion.div 
                className="absolute right-0 z-10 xl:static flex-[1.2] w-4/5 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent"
                initial={dimensions.width > 699 ? { x: 500, opacity: 0 } : { x: 220, opacity: 0 }}
                animate={ServiceAnimation2}
              >
                <h3 className="text-right text-background xl:text-primary">{ t("common:subsection2") }</h3>
                <p className="text-right text-background xl:text-black">{ t("home:service2") }</p>
              </motion.div>
            )
          }
          <div className="relative z-0 xl:z-20 flex-[1.8] h-96 lg:h-80">
            <Image src='/images/dump-truck.jpg' className="object-cover" fill alt='rall shipping' />
          </div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: "url('/images/bg2.jpg')" }} />

      <section id="work">
        <h2>{t("common:section3")}</h2>

        <div className="flex flex-col items-center gap-8">
          <motion.p 
            className="text-center" 
            style={{ padding: "0 clamp(0rem, -35.7143rem + 57.1429vw, 25rem)" }}
            initial={{ y: 100, opacity: 0 }}
            transition={{ duration: .4 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Mēs aicinām CE kategorijas autovadītājus pievienoties mūsu komandai darbam Eiropas Savienības un NVS valstīs. Piedāvājam darbu arī autovadītājiem no citām valstīm (Ukrainas, Baltkrievijas, Krievijas un citām valstīm).
          </motion.p>
        
          <motion.div 
            className="flex flex-col lg:flex-row max-lg:items-center lg:justify-center gap-8 lg:gap-16 w-full"
            variants={CardContainer}
            initial="hidden"
            whileInView="visible"
          >
            <Card title={"Prasības"} directionLeft={true}>
              <ul className="list-disc font-light" style={{ fontSize: "clamp(0.875rem, 0.2917rem + 3.3333vw, 1.125rem)", marginLeft: "clamp(0.5rem, -1.4091rem + 10.9091vw, 2rem)" }}>
                <li>Lorem ipsum dolor sit amet elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum sit amet consectetur elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur elit.</li>
              </ul>
            </Card>

            <Card title={"Mēs nodrošinām"} directionLeft={false}>
              <ul className="list-disc font-light" style={{ fontSize: "clamp(0.875rem, 0.2917rem + 3.3333vw, 1.125rem)", marginLeft: "clamp(0.5rem, -1.4091rem + 10.9091vw, 2rem)" }}>
                <li>Lorem ipsum dolor sit amet consectetur el.</li>
                <li>Lorem ipsum dolor sit elit.</li>
                <li>Lorem ipsum dolor sit amet elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur elit.</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: "url('/images/bg3.jpg')" }} />

      <section id="contact">
        <h2>{t("common:section4")}</h2>

        <div className="flex flex-col lg:flex-row max-lg:items-center lg:justify-center gap-8 lg:gap-16 w-full">
          <Card 
            title={<div className="flex flex-col items-center"><Image src="/icons/truck.png" width={72} height={72} alt="contact rall truck" />{t("common:subsection1")}</div>}
            directionLeft={true}
          >
            <ul className="text-center text-lg font-light">
              <li className="mt-2">
                <span className="block text-lg leading-5 font-medium text-foreground" style={{ fontSize: "clamp(0.9375rem, 0.375rem + 3vw, 1.125rem)" }}>Zigmārs Rampāns</span>
                <a href="tel:+37129181831" className="flex flex-row gap-1 items-center justify-center text-base text-foreground hover:text-secondary"><HiOutlinePhone className="w-4 h-4" /><span>+37129181831</span></a>
              </li>
              <li className="mt-2">
                <span className="block text-lg leading-5 font-medium text-foreground" style={{ fontSize: "clamp(0.9375rem, 0.375rem + 3vw, 1.125rem)" }}>Konstanīns Savčenko</span>
                <a href="tel:+37126114458" className="flex flex-row gap-1 items-center justify-center text-base text-foreground hover:text-secondary"><HiOutlinePhone className="w-4 h-4" /><span>+37126114458</span></a>
              </li>
            </ul>
          </Card>

          <Card 
            title={<div className="flex flex-col items-center"><Image src="/icons/dump-truck.png" width={72} height={72} alt="contact rall dump truck" />{t("common:subsection2")}</div>}
            directionLeft={false}
          >
            <ul className="text-center text-lg font-light">
              <li className="mt-2">
                <span className="block text-lg leading-5 font-medium text-foreground" style={{ fontSize: "clamp(0.9375rem, 0.375rem + 3vw, 1.125rem)" }}>Arnolds Laizāns</span>
                <a href="tel:+37129477689" className="flex flex-row gap-1 items-center justify-center text-foreground hover:text-secondary"><HiOutlinePhone className="w-4 h-4" /><span  style={{ fontSize: "clamp(0.8125rem, 0.25rem + 3vw, 1rem)" }} >+37129477689</span></a>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4478106.893429736!2d25.408669955440143!3d56.767423135554246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2160751325b9d%3A0x92480e3af5b843de!2sRall%20%2C%20SIA!5e0!3m2!1sen!2slv!4v1692030117310!5m2!1sen!2slv" className="w-full h-80" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Layout>
  )
}
