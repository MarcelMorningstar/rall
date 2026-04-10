import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import LinkToHash from "./LinkToHash";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HiMenuAlt3, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Navbar() {
  const { width, height } = useWindowSize();
  const router = useRouter()
  const { pathname, locale, locales, asPath, query } = router
  const { t } = useTranslation('common')

  const handleLanguage = (e) => {
    const language = e.target.value;

    router.push({ pathname, query }, asPath, { locale: language })
  }

  useEffect(() => {
    const hash = sessionStorage.getItem("to");

    if (hash) {
      const element = document.querySelector(hash)

      if (element) {
        const rect = element.getBoundingClientRect();
        const padding = window.getComputedStyle(element, null).getPropertyValue('padding-top')
  
        window.scrollTo(0, rect.top + window.scrollY - parseInt(padding) * 2);
      }

      sessionStorage.removeItem("to")
    }
  }, [])

  return (
    <nav className="fixed z-40 flex flex-col items-center w-full h-auto bg-background border-foreground/60" style={{ borderBottomWidth: '1px' }}>
      <div className="flex flex-row justify-between w-full h-10" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
        <div className="flex flex-row gap-3">
          <a href="mailto:transport@rall.lv" className="flex flex-row items-center gap-2 text-foreground hover:text-primary transition-all duration-300" aria-label="contact rall">
            <HiOutlineMail className="w-5 h-5 text-primary"/>
            <span className="hidden md:block text-base font-medium whitespace-nowrap">transport@rall.lv</span>
          </a>
          <a href="tel:+37164633840" className="flex flex-row items-center gap-2 text-foreground hover:text-primary transition-all duration-300" aria-label="contact rall">
            <HiOutlinePhone className="w-5 h-5 text-primary"/>
            <span className="hidden md:block text-base font-medium whitespace-nowrap">+37164633840</span>
          </a>
        </div>

        <div className="flex flex-row items-center gap-1.5">
          {
            locales.map(item => (
              <button key={item} className={`transition-all duration-300 text-sm font-medium text-primary hover:text-secondary uppercase ${ locale === item ? 'underline text-secondary' : '' }`} value={item} onClick={handleLanguage}>{ item }</button>
            ))
          }
        </div>
      </div>

      <hr className="relative w-11/12 h-0.5 my-0.5 bg-foreground/60" />

      <div className="flex flex-row items-center justify-between gap-3 w-full h-16" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
        <div className="flex flex-row items-end gap-2">
          <Link href="/" className="relative w-28 sm:w-32 h-12 sm:h-16 transition-all duration-500">
            <Image src="/icons/rall.svg" fill priority alt="rall logo" />
          </Link>
        </div>

        {
          width && width > 900 ? (
            <div className="flex flex-row gap-4">
              <Menu>
                <MenuButton>
                  <span className={`relative font-medium text-primary after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300 cursor-pointer whitespace-nowrap uppercase`}>
                    { t("section1") }
                  </span>
                </MenuButton>
                <MenuItems anchor="bottom" className="relative z-50 w-52 origin-top-right rounded-xl border shadow-md bg-background p-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0">
                  <MenuItem>
                    <LinkToHash to='/#shipping' className="text-black capitalize">{ t("subsection1") }</LinkToHash>
                  </MenuItem>
                    <MenuItem>
                      <LinkToHash to='/#dump-trucks' className="block text-black capitalize">{ t("subsection2") }</LinkToHash>
                    </MenuItem>
                </MenuItems>
              </Menu>

              <LinkToHash to="/#about" className="relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300">{ t("section2") }</LinkToHash>
              <LinkToHash to="/#work" className="relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300">{ t("section3") }</LinkToHash>
              <LinkToHash to="/#contact" className="relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300">{ t("section4") }</LinkToHash>
            </div>
          ) : (
            <Menu>
              <MenuButton><span><HiMenuAlt3 className="w-7 h-7 text-primary cursor-pointer" /></span></MenuButton>
              <MenuItems anchor="bottom end" className="relative z-50 w-52 origin-top-right rounded-xl border shadow-md bg-background p-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0">
                <MenuItem>
                  <LinkToHash to='/#services' className="block text-foreground text-base font-semibold capitalize">
                    { t("section1") }
                  </LinkToHash>
                </MenuItem>
                <MenuItem>
                  <LinkToHash to='/#shipping' className="block text-black capitalize">
                    { t("subsection1") }
                  </LinkToHash>
                </MenuItem>
                <MenuItem>
                  <LinkToHash to='/#dump-trucks' className="block text-black capitalize">
                    { t("subsection2") }
                </LinkToHash>
                </MenuItem>
                <hr className="my-3" />
                <MenuItem>
                  <Link href='/' className="text-foreground text-base font-semibold capitalize">
                    { t("section1.5") }
                  </Link>
                </MenuItem>
                <MenuItem>
                  <LinkToHash to='/#about' className="block text-black capitalize">
                    { t("section2") }
                  </LinkToHash>
                </MenuItem>
                <MenuItem>
                  <LinkToHash to='/#work' className="block text-black capitalize">
                    { t("section3") }
                  </LinkToHash>
                </MenuItem>
                <MenuItem>
                  <LinkToHash to='/#contact' className="block text-black capitalize">
                    { t("section4") }
                  </LinkToHash>
                </MenuItem>
              </MenuItems>
            </Menu>
          )
        }
      </div>
    </nav>
  )
}
