import Layout from "./layout";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";

export default function Page() {
    const { t } = useTranslation()

    return (
        <Layout>
            <Header image='shipping-header.jpg' />

            <section>
                <h2>{ t("common:subsection3") }</h2>

                <div className="flex flex-row flex-wrap justify-evenly gap-8">
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Dzīvojamās Mājas</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Komerciāla</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Jaukta Lietojuma</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Institucionāla</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Rūpnieciska</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Ceļi</span>
                    </div>
                </div>
            </section>

            <ImageSlider images={['c1.jpg', 'c2.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg', 'c6.jpg', 'c7.jpg', 'c8.jpg']} />

            <p className="text-center" style={{ padding: '48px clamp(1.5rem, -4.375rem + 33.5714vw, 25rem)' }}>{ t("construction:description") }</p>
        </Layout>
    )
}