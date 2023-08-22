import Layout from "./layout";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Header from "@/components/Header";

export default function Page() {
    const { t } = useTranslation()

    return (
        <Layout>
            <Header image='shipping-header.jpg' />

            <section>
                <h2>{ t("common:subsection1") }</h2>

                <div className="flex flex-row flex-wrap justify-evenly gap-8">
                    <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center w-auto h-32"><Image src="/icons/truck1.png" width={240} height={120} alt='rall truck' /></div>
                        <span className="text-2xl font-semibold whitespace-nowrap capitalize text-foreground">{ t("shipping:category1") }</span>
                    </div>
                </div>
            </section>

            <div className="relative grid grid-cols-1 xl:grid-cols-2 items-center xl:items-start gap-8 xl:px-24 py-12">
                <div className="relative w-full h-96">
                    <Image src='/images/shipping.png' className="object-cover" fill alt='rall shiping' />
                </div>
                <p className="absolute xl:static w-5/6 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("shipping:description") }</p>
            </div>
        </Layout>
    )
}
