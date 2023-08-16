import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Head>
          <title>RALL</title>
          <link href="favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
