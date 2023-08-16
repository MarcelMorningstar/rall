import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="absolute bottom-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-y-6 w-full h-[428px] lg:h-60 py-10 bg-foreground" style={{ paddingLeft: 'min(10vw, 96px)', paddingRight: 'min(10vw, 96px)' }}>
      <div className="flex flex-col lg:flex-row gap-x-8 gap-y-6">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span className="text-2xl font-medium text-background uppercase">{ t("section1.5") }</span>
          <div className="flex flex-col items-center lg:items-start gap-[2px]">
            <Link href="/#about" className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("section2") }</Link>
            <Link href="/#contact" className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("section3") }</Link>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span className="text-2xl font-medium text-background uppercase">{ t("section1") }</span>
          <div className="flex flex-col items-center lg:items-start gap-[2px]">
            <Link href='/shipping' className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("subsection1") }</Link>
            <Link href='/dump-trucks' className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("subsection2") }</Link>
            <Link href='/construction' className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("subsection3") }</Link>
            <Link href='/rent' className="text-base font-normal whitespace-nowrap capitalize transition-all duration-300 text-background hover:text-secondary">{ t("subsection4") }</Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <a href="mailto:rall@gmail.com" className="flex flex-row lg:flex-row-reverse items-center gap-2">
          <HiOutlineMail className="w-8 h-8 text-secondary"/>
          <span className="text-2xl font-semibold whitespace-nowrap text-background">info@rall.lv</span>
        </a>
        <a href="tel:+37128596185" className="flex flex-row lg:flex-row-reverse items-center gap-2">
          <HiOutlinePhone className="w-8 h-8 text-secondary"/>
          <span className="text-2xl font-semibold whitespace-nowrap text-background">+37164633840</span>
        </a>
      </div>
    </footer>
  )
}
