import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000'
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:8000'),
  title: {
    default: 'Netflix Clone',
    template: '%s | Netflix'
  },
  description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
  keywords: ['Netflix', 'movies', 'TV shows', 'streaming', 'entertainment'],
  authors: [{ name: 'Netflix Clone' }],
  creator: 'Netflix Clone',
  publisher: 'Netflix Clone',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    siteName: 'Netflix Clone',
    title: 'Netflix Clone - Watch TV Shows Online, Watch Movies Online',
    description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8',
        width: 1200,
        height: 630,
        alt: 'Netflix Clone'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix Clone - Watch TV Shows Online, Watch Movies Online',
    description: 'Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.',
    images: ['https://images.unsplash.com/photo-1594908900066-3f47337549d8']
  },
  verification: {
    google: 'verification_token',
    other: {
      me: ['@netflix-clone']
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
