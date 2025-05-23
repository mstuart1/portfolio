import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michelle Stuart | Full Stack Engineer',
  description: "Michelle Stuart is a full stack developer with a background in marine biology and molecular science, building elegant, accessible web tools at the intersection of science, design, and technology.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 scroll-smooth`}> 
        <Navbar />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}