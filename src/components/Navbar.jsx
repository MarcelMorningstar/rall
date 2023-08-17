import { useState } from "react";
import { useWindowDimensions } from "@/utilities/window";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from 'next-translate/useTranslation';
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { HiMenuAlt3, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Navbar() {
  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)
  const dimensions = useWindowDimensions()
  const router = useRouter()
  const { pathname, locale, locales, asPath, query } = router
  const { t } = useTranslation('common');

  const handleLanguage = (e) => {
    const language = e.target.value;

    router.push({ pathname, query }, asPath, { locale: language })
  }

  return (
    <nav className="fixed z-40 flex flex-col items-center w-full h-auto bg-background border-foreground/60" style={{ borderBottomWidth: '1px' }}>
      <div className="flex flex-row justify-between w-full h-10" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
        <div className="flex flex-row gap-3">
          <a href="mailto:rall@gmail.com" className="flex flex-row items-center gap-2">
            <HiOutlineMail className="w-5 h-5 text-primary"/>
            <span className="hidden md:block text-base font-medium whitespace-nowrap text-foreground">info@rall.lv</span>
          </a>
          <a href="tel:+37128596185" className="flex flex-row items-center gap-2">
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
                  <span className={`relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${(pathname == "/shipping" || pathname == "/dump-trucks" || pathname == "/construction" || pathname == "/rent") ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300 cursor-pointer`}>{ t("section1") }</span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <Link href='/shipping'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection1") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/dump-trucks'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection2") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/construction'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection3") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/rent'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection4") }</span>
                      </MenuItem>
                    </Link>
                  </ul>
                </MenuList>
              </Menu>

              <Link href="/#about" className={`relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${ pathname == "/about" ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}>{ t("section2") }</Link>
              <Link href="/#contact" className={`relative font-medium text-primary whitespace-nowrap uppercase after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${ pathname == "/contact" ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-primary after:transition-all after:duration-300`}>{ t("section3") }</Link>
            </div>
          ) : (
            <Menu open={openMenu2} handler={setOpenMenu2} placement="bottom-end">
                <MenuHandler>
                  <span><HiMenuAlt3 className="w-7 h-7 text-primary cursor-pointer" /></span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <span className="text-foreground text-base font-semibold capitalize">{ t("section1") }</span>
                    <Link href='/shipping'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection1") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/dump-trucks'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection2") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/construction'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection3") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/rent'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("subsection4") }</span>
                      </MenuItem>
                    </Link>
                    <hr className="my-3" />
                    <span className="text-foreground text-base font-semibold capitalize">{ t("section1.5") }</span>
                    <Link href='/#about'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("section2") }</span>
                      </MenuItem>
                    </Link>
                    <Link href='/#contact'>
                      <MenuItem>
                        <span className="text-black capitalize">{ t("section3") }</span>
                      </MenuItem>
                    </Link>
                  </ul>
                </MenuList>
            </Menu>
          )
        }
      </div>
    </nav>
  )
}
