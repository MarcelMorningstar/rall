'use client'

import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

export default function Navbar() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(false);

  const menuItems = [
    {
      title: "Starptautiskā Transportēšana",
      link: "/shipping",
    },
    {
      title: "Pašizgāzēji",
      link: "/dump-trucks",
    },
    {
      title: "Būvniecība",
      link: "/construction",
    },
    {
      title: "Biroju Noma",
      link: "/rent",
    },
  ];

  return (
    <nav className="absolute top-2 flex flex-row items-center justify-between w-full bg-foreground/80 px-24 py-1.5">
      <div className="flex flex-row items-end gap-2">
        <Link href="/" className="text-4xl font-bold text-primary">LOGO</Link>

        <div className="flex flex-row gap-1">
          <button className="hover:text-primary">GB</button>
          <button className="hover:text-primary">RU</button>
          <button className="hover:text-primary">LV</button>
          <button className="hover:text-primary">EN</button>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <Link href="/about" className={pathname == "/about" ? "relative font-medium text-background after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300" : "relative font-medium text-background after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300"}>PAR MUMS</Link>
        <Link href="/contact" className={pathname == "/contact" ? "relative font-medium text-background after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300" : "relative font-medium text-background after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300"}>KONTAKTI</Link>

        <Menu open={openMenu} handler={setOpenMenu} allowHover>
          <MenuHandler>
            <span className={(pathname == "/shipping" || pathname == "/dump-trucks" || pathname == "/construction" || pathname == "/rent") ? "relative font-medium text-background after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300" : "relative font-medium text-background after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-1/3 after:h-[2px] after:bg-background after:transition-all after:duration-300"}>PAKALPOJUMI</span>
          </MenuHandler>
          <MenuList className="w-auto">
            <ul className="w-full">
              {menuItems.map(({ title, link }) => (
                <Link href={link} key={title}>
                  <MenuItem>
                    <span>{ title }</span>
                  </MenuItem>
                </Link>
              ))}
            </ul>
          </MenuList>
        </Menu>
      </div>
    </nav>
  )
}
