import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paws',
  description: 'An app where people can adopt or give animals up for adoption',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
        <NavBar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}
