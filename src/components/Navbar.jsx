import { useEffect, useState } from "react";
import { useWindowDimensions } from "@/utilities/window";
import LinkToHash from "./LinkToHash";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import useTranslation from 'next-translate/useTranslation';
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { HiMenuAlt3, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Navbar() {
  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)
  const dimensions = useWindowDimensions()
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
          <a href="mailto:rall@gmail.com" className="flex flex-row items-center gap-2" aria-label="contact rall">
            <HiOutlineMail className="w-5 h-5 text-primary"/>
            <span className="hidden md:block text-base font-medium whitespace-nowrap text-foreground">{ t("email") }</span>
          </a>
          <a href="tel:+37164633840" className="flex flex-row items-center gap-2" aria-label="contact rall">
            <HiOutlinePhone className="w-5 h-5 text-primary"/>
            <span className="hidden md:block text-base font-medium whitespace-nowrap text-foreground">+37164633840</span>
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
          dimensions.width > 900 ? (
            <div className="flex flex-row gap-4">
              <Menu open={openMenu1} handler={setOpenMenu1} allowHover>
                <MenuHandler>
                  <span className={`relative font-medium text-primary after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300 cursor-pointer`}><LinkToHash to='/#services' className="whitespace-nowrap uppercase">{ t("section1") }</LinkToHash></span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <LinkToHash to='/#shipping' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection1") }</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/#dump-trucks' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection2") }</span>
                      </MenuItem>
                    </LinkToHash>
                  </ul>
                </MenuList>
              </Menu>

              <LinkToHash to="/#about" className="relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300">{ t("section2") }</LinkToHash>
              <LinkToHash to="/#work" className="relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300">{ t("section3") }</LinkToHash>
              <LinkToHash to="/#contact" className="relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300">{ t("section4") }</LinkToHash>
            </div>
          ) : (
            <Menu open={openMenu2} handler={setOpenMenu2} placement="bottom-end">
                <MenuHandler>
                  <span><HiMenuAlt3 className="w-7 h-7 text-primary cursor-pointer" /></span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <LinkToHash to='/#services'><span className="text-foreground text-base font-semibold capitalize">{ t("section1") }</span></LinkToHash>
                    <LinkToHash to='/#shipping' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection1") }</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/#dump-trucks' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection2") }</span>
                      </MenuItem>
                    </LinkToHash>
                    <hr className="my-3" />
                    <Link href="/"><span className="text-foreground text-base font-semibold capitalize">{ t("section1.5") }</span></Link>
                    <LinkToHash to='/#about' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("section2") }</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/#work' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("section3") }</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/#contact' className="block">
                      <MenuItem>
                        <span className="text-black capitalize">{ t("section4") }</span>
                      </MenuItem>
                    </LinkToHash>
                  </ul>
                </MenuList>
            </Menu>
          )
        }
      </div>
    </nav>
  )
}
