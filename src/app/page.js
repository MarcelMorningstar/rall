import Link from "next/link"
import Image from "next/image"
import CarouselHeader from "@/components/CarouselHeader"
import Worker from "@/components/Worker"

export default function Home() {
  return (
    <main>
      <CarouselHeader />

      <section id="about">
        <h2>PAR MUMS</h2>

        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-4 lg:gap-12">
          <div className="flex flex-col items-center lg:items-start gap-2 w-full lg:w-[45%]">
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8 w-full lg:w-[55%]">
            <div className="flex flex-col items-center">
              <Image src="/icons/human.png" width={100} height={100} alt="rall workers"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap text-foreground">DARBINIEKI</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/march.png" width={100} height={100} alt="rall established in"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap text-foreground">DIBINĀTS</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/truck.png" width={100} height={100} alt="rall trucks"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap text-foreground">AUTOPARKS</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/icons/buildings.png" width={100} height={100} alt="rall buildings"/>
              <span className="text-center text-xl font-semibold whitespace-nowrap text-foreground">ĒKAS</span>
              <span className="text-center text-3xl font-bold text-primary">1200</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('./images/shipping.jpg')" }} />

      <section>
        <h2>PAKALPOJUMI</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
          <div className="flex flex-col items-center gap-2">
            <Image src="/icons/truck.png" width={120} height={120} alt="rall international shipping" />
            <span className="text-center text-3xl font-bold whitespace-nowrap text-foreground">Transportēšana</span>
            <p className="text-center line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore et dolore</p>
            <Link href="/shipping" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-background hover:text-secondary bg-primary">Uzzini vairāk</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/icons/dump-truck.png" width={120} height={120} alt="rall dump trucks" />
            <span className="text-center text-3xl font-bold whitespace-nowrap text-foreground">Pašizgāzēji</span>
            <p className="text-center line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore et dolore</p>
            <Link href="/dump-trucks" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-background hover:text-secondary bg-primary">Uzzini vairāk</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/icons/constraction.png" width={120} height={120} alt="rall cunstruction" />
            <span className="text-center text-3xl font-bold whitespace-nowrap text-foreground">Būvniecība</span>
            <p className="text-center line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore et dolore</p>
            <Link href="/construction" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-background hover:text-secondary bg-primary">Uzzini vairāk</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/icons/office.png" width={120} height={120} alt="rall rent" />
            <span className="text-center text-3xl font-bold whitespace-nowrap text-foreground">Biroju Noma</span>
            <p className="text-center line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore sed do eiusmod tempor incididunt ut labore et dolore</p>
            <Link href="/rent" className="flex items-center justify-center w-48 h-12 text-lg font-semibold transition-all duration-500 text-background hover:text-secondary bg-primary">Uzzini vairāk</Link>
          </div>
        </div>
      </section>

      <div className="h-96 bg-center bg-no-repeat bg-fixed bg-cover" style={{ "backgroundImage": "url('./images/trucks.jpg')" }} />

      <section id="contact">
        <h2>KONTAKTI</h2>

        <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-8">
          <Worker image="p.jpeg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
          <Worker image="p.jpeg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
          <Worker image="p.jpeg" name="Iveta Pjankova" position="CEO" email="fake@gmail.com" phone="+31126521385" />
        </div>
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4478106.893429736!2d25.408669955440143!3d56.767423135554246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46c2160751325b9d%3A0x92480e3af5b843de!2sRall%20%2C%20SIA!5e0!3m2!1sen!2slv!4v1692030117310!5m2!1sen!2slv" className="w-full h-80" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </main>
  )
}
