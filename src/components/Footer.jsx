import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-y-6 w-full h-[428px] lg:h-60 py-10 bg-foreground" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span className="text-2xl font-medium text-background uppercase">KOMPĀNIJA</span>
          <div className="flex flex-col items-center lg:items-start gap-[2px]">
            <Link href="/about" className="text-base font-normal whitespace-nowrap transition-all duration-300 text-background hover:text-secondary">Par Mums</Link>
            <Link href="/contact" className="text-base font-normal whitespace-nowrap transition-all duration-300 text-background hover:text-secondary">Kontakti</Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span className="text-2xl font-medium text-background uppercase">PAKALPOJUMI</span>
          <div className="flex flex-col items-center lg:items-start gap-[2px]">
            <Link href='/shipping' className="text-base font-normal whitespace-nowrap transition-all duration-300 text-background hover:text-secondary">Starptautiskā Transportēšana</Link>
            <Link href='/dump-trucks' className="text-base font-normal whitespace-nowrap transition-all duration-300 text-background hover:text-secondary">Pašizgāzēji</Link>
            <Link href='/construction' className="text-base font-normal whitespace-nowrap transition-all duration-300 text-background hover:text-secondary">Būvniecība</Link>
            <Link href='/rent' className="text-base font-normal whitespace-nowrap transition-all duration-300 text-background hover:text-secondary">Biroju Noma</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <Link href="mailto:rall@gmail.com" className="flex flex-row lg:flex-row-reverse items-center gap-2">
          <HiOutlineMail className="w-8 h-8 text-secondary"/>
          <span className="text-2xl font-semibold whitespace-nowrap text-background">rall@gmail.com</span>
        </Link>
        <Link href="tel:+37128596185" className="flex flex-row lg:flex-row-reverse items-center gap-2">
          <HiOutlinePhone className="w-8 h-8 text-secondary"/>
          <span className="text-2xl font-semibold whitespace-nowrap text-background">+371 28 596 185</span>
        </Link>
      </div>
    </footer>
  )
}
