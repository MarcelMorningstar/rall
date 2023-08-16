import Layout from "./layout";
import Image from "next/image";
import Header from "@/components/Header";
import ImageSlider from "@/components/ImageSlider";

export default function Page() {
    return (
        <Layout>
            <Header image='trucks.jpg' />

            <section>
                <h2>Biroju Noma</h2>

                <div className="flex flex-row flex-wrap justify-evenly gap-8">
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Biroja Ēkas</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Dalīts Ofiss</span>
                    </div>
                    <div className="flex flex-col flex-1 items-center justify-center gap-1">
                        <Image src="/icons/truck.png" width={120} height={120} alt='rall truck' />
                        <span className="text-2xl font-semibold whitespace-nowrap text-foreground">Individuāls Ofiss</span>
                    </div>
                </div>
            </section>

            <ImageSlider />

            <p className="text-center" style={{ padding: '48px clamp(1.5rem, -4.375rem + 33.5714vw, 25rem)' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam, quisquam magnam consequuntur iure in atque, incidunt nemo minima, sint quae obcaecati facilis officia et a sunt. Beatae, a recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eius praesentium et amet distinctio ipsam fuga totam officiis, eligendi nesciunt, maiores accusamus nostrum molestias nisi necessitatibus. Ipsum hic iusto dicta! Quibusdam eius praesentium et amet distinctio ipsam fuga totam officiis, eligendi nesciunt, maiores accusamus nostrum molestias nisi necessitatibus. Ipsum hic iusto dicta!</p>
        </Layout>
    )
}
