'use client'

import { useState } from "react";
import { useWindowDimensions } from "@/utilities/window";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { HiMenuAlt3, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Navbar() {
  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)
  const dimensions = useWindowDimensions()
  const pathname = usePathname()
  
  return (
    <nav className="top-2 z-50 flex flex-col items-center w-full py-1.5">
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

        <div className="flex flex-row gap-1">
          <button className="transition-all duration-300 text-sm text-foreground hover:text-secondary">EN</button>
          <button className="transition-all duration-300 text-sm text-foreground hover:text-secondary">GB</button>
          <button className="transition-all duration-300 text-sm text-foreground hover:text-secondary">RU</button>
          <button className="transition-all duration-300 text-sm text-foreground hover:text-secondary">LV</button>
        </div>
      </div>

      <h3 className="w-11/12 h-0.5 my-1 bg-foreground/75" />

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
                  <span className={`relative font-medium text-foreground whitespace-nowrap after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${(pathname == "/shipping" || pathname == "/dump-trucks" || pathname == "/construction" || pathname == "/rent") ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-foreground after:transition-all after:duration-300 cursor-pointer`}>PAKALPOJUMI</span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <Link href='/shipping'>
                      <MenuItem>
                        <span className="text-black">Starptautiskā Transportēšana</span>
                      </MenuItem>
                    </Link>
                    <Link href='/dump-trucks'>
                      <MenuItem>
                        <span className="text-black">Pašizgāzēji</span>
                      </MenuItem>
                    </Link>
                    <Link href='/construction'>
                      <MenuItem>
                        <span className="text-black">Būvniecība</span>
                      </MenuItem>
                    </Link>
                    <Link href='/rent'>
                      <MenuItem>
                        <span className="text-black">Biroju Noma</span>
                      </MenuItem>
                    </Link>
                  </ul>
                </MenuList>
              </Menu>

              <Link href="/#about" className={`relative font-medium text-foreground whitespace-nowrap after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${ pathname == "/about" ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-foreground after:transition-all after:duration-300`}>PAR MUMS</Link>
              <Link href="/#contact" className={`relative font-medium text-foreground whitespace-nowrap after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${ pathname == "/contact" ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-foreground after:transition-all after:duration-300`}>KONTAKTI</Link>
            </div>
          ) : (
            <Menu open={openMenu2} handler={setOpenMenu2} placement="bottom-end">
                <MenuHandler>
                  <span><HiMenuAlt3 className="w-7 h-7 text-foreground cursor-pointer" /></span>
                </MenuHandler>
                <MenuList className="w-auto">
                  <ul className="w-full focus:outline-none">
                    <span className="text-foreground text-base font-semibold">Pakalpojumi</span>
                    <Link href='/shipping'>
                      <MenuItem>
                        <span className="text-black">Starptautiskā Transportēšana</span>
                      </MenuItem>
                    </Link>
                    <Link href='/dump-trucks'>
                      <MenuItem>
                        <span className="text-black">Pašizgāzēji</span>
                      </MenuItem>
                    </Link>
                    <Link href='/construction'>
                      <MenuItem>
                        <span className="text-black">Būvniecība</span>
                      </MenuItem>
                    </Link>
                    <Link href='/rent'>
                      <MenuItem>
                        <span className="text-black">Biroju Noma</span>
                      </MenuItem>
                    </Link>
                    <hr className="my-3" />
                    <span className="text-foreground text-base font-semibold">Kompānija</span>
                    <Link href='/#about'>
                      <MenuItem>
                        <span className="text-black">Par Mums</span>
                      </MenuItem>
                    </Link>
                    <Link href='/#contact'>
                      <MenuItem>
                        <span className="text-black">Kontakti</span>
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
