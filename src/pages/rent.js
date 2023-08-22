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
                <h2>{ t("common:subsection4") }</h2>

                <div className="flex flex-row flex-wrap justify-evenly gap-8">
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <img src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Biroja Ēkas</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <img src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Dalīts Ofiss</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <img src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Individuāls Ofiss</span>
                    </div>
                </div>
            </section>

            <ImageSlider images={['r1.jpg', 'r1.jpg', 'r1.jpg', 'r1.jpg', 'r1.jpg', 'r1.jpg', 'r1.jpg', 'r1.jpg']} />

            <p className="text-center" style={{ padding: '48px clamp(1.5rem, -4.375rem + 33.5714vw, 25rem)' }}>{ t("rent:description") }</p>
        </Layout>
    )
}
