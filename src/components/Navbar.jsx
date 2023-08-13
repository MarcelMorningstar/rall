'use client'

import { useState } from "react";
import { useWindowDimensions } from "@/utilities/window";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Menu, MenuHandler, MenuList, MenuItem, Typography } from "@material-tailwind/react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [openMenu1, setOpenMenu1] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)
  const dimensions = useWindowDimensions()
  const pathname = usePathname()
  
  return (
    <nav className="absolute top-2 z-50 flex flex-row items-center justify-between gap-3 w-full bg-foreground/80 py-1.5" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
      <div className="flex flex-row items-end gap-2">
        <Link href="/" className="relative w-24 h-8">
          <Image src="/icons/rall.svg" fill priority alt="rall logo" />
        </Link>

        <div className="flex flex-row gap-1">
          <button className="transition-all duration-300 text-sm text-background hover:text-secondary">GB</button>
          <button className="transition-all duration-300 text-sm text-background hover:text-secondary">RU</button>
          <button className="transition-all duration-300 text-sm text-background hover:text-secondary">LV</button>
          <button className="transition-all duration-300 text-sm text-background hover:text-secondary">EN</button>
        </div>
      </div>

      {
        dimensions.width > 900 ? (
          <div className="flex flex-row gap-4">
            <Menu open={openMenu1} handler={setOpenMenu1} allowHover>
              <MenuHandler>
                <span className={`relative font-medium text-background whitespace-nowrap after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${(pathname == "/shipping" || pathname == "/dump-trucks" || pathname == "/construction" || pathname == "/rent") ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300 cursor-pointer`}>PAKALPOJUMI</span>
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

            <Link href="/about" className={`relative font-medium text-background whitespace-nowrap after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${ pathname == "/about" ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300`}>PAR MUMS</Link>
            <Link href="/contact" className={`relative font-medium text-background whitespace-nowrap after:block after:absolute after:left-1/2 after:-translate-x-1/2 ${ pathname == "/contact" ? "after:w-1/3" : "after:w-0" } hover:after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300`}>KONTAKTI</Link>
          </div>
        ) : (
          <Menu open={openMenu2} handler={setOpenMenu2} placement="bottom-end">
              <MenuHandler>
                <span><HiMenuAlt3 className="w-7 h-7 text-background cursor-pointer" /></span>
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
                  <Link href='/about'>
                    <MenuItem>
                      <span className="text-black">Par Mums</span>
                    </MenuItem>
                  </Link>
                  <Link href='/contact'>
                    <MenuItem>
                      <span className="text-black">Kontakti</span>
                    </MenuItem>
                  </Link>
                </ul>
              </MenuList>
          </Menu>
        )
      }

    </nav>
  )
}
