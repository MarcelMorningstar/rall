import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import useTranslation from 'next-translate/useTranslation'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  const { t } = useTranslation("home")

  return (
    <div className={inter.className}>
      <Head>
          <title>RALL</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta name='description' content={t("home:about-description")} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
