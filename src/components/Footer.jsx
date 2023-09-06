import LinkToHash from "./LinkToHash";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="absolute bottom-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-y-6 w-full h-[428px] lg:h-60 py-10 bg-foreground" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <Link href="/"><span className="text-2xl font-medium text-background uppercase">{ t("section1.5") }</span></Link>
          <div className="flex flex-col items-center lg:items-start gap-[2px]">
            <LinkToHash to="/#about" className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("section2") }</LinkToHash>
            <LinkToHash to="/#work" className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("section3") }</LinkToHash>
            <LinkToHash to="/#contact" className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("section4") }</LinkToHash>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <LinkToHash to="/#services"><span className="text-2xl font-medium text-background uppercase">{ t("section1") }</span></LinkToHash>
          <div className="flex flex-col items-center lg:items-start gap-[2px]">
            <LinkToHash to='/#shipping' className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("subsection1") }</LinkToHash>
            <LinkToHash to='/#dump-trucks' className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("subsection2") }</LinkToHash>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <a href="mailto:transport@rall.lv" className="flex flex-row lg:flex-row-reverse items-center gap-2 text-background hover:text-secondary transition-all duration-300" aria-label="contact rall">
          <HiOutlineMail className="w-8 h-8 text-secondary"/>
          <span className="text-2xl font-semibold whitespace-nowrap">transport@rall.lv</span>
        </a>
        <a href="tel:+37164633840" className="flex flex-row lg:flex-row-reverse items-center gap-2 text-background hover:text-secondary transition-all duration-300" aria-label="contact rall">
          <HiOutlinePhone className="w-8 h-8 text-secondary"/>
          <span className="text-2xl font-semibold whitespace-nowrap">+37164633840</span>
        </a>
      </div>
    </footer>
  )
}
