import './globals.css'
import Link from 'next/link'
import { Poppins } from '@next/font/google'

// Root layout will add things outside of 'page'

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
  variable: "--font-poppins"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${poppins.className} bg-secondary-900 text-secondary-300`}>
        <nav className="flex border-2">
          <Link className="hover:bg-primary-900" href="/">
          <h1 className='text-lg py-4 px-10'>Home</h1>
          </Link>
          <h1 className='text-lg py-4 px-10'>About</h1>
        </nav>
        
        <div>
        {children}
        </div>
        
        </body>
    </html>
  )
}
