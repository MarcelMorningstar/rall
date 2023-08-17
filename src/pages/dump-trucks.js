import Layout from "./layout";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Header from "@/components/Header";

export default function Page() {
    const { t } = useTranslation()

    return (
        <Layout>
            <Header image='dump-truck-header.jpg' />

            <section>
                <h2>{ t("common:subsection2") }</h2>

                <div className="flex flex-row flex-wrap justify-evenly gap-8">
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Smiltis</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Zeme</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Akmens</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Cements</span>
                    </div>
                </div>
            </section>

            <div className="relative grid grid-cols-1 xl:grid-cols-2 items-center xl:items-start gap-8 xl:px-24 py-12">
                <div className="relative w-full h-96">
                    <Image src='/images/dump-truck.jpg' className="object-cover" fill alt='rall shiping' />
                </div>
                <p className="absolute xl:static w-5/6 xl:w-auto pl-6 pr-8 xl:px-0 py-4 xl:py-0 bg-black/50 xl:bg-transparent text-background xl:text-black" style={{ fontSize: 'clamp(0.75rem, 0.525rem + 1.2vw, 1.125rem)' }}>{ t("dump-trucks:description") }</p>
            </div>
        </Layout>
    )
}