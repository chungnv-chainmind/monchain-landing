import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Monchain - Next-Generation Blockchain Platform',
  description: 'Monchain combines EVM compatibility with Cosmos interoperability for lightning-fast transactions and unlimited scalability.',
  keywords: 'blockchain, EVM, Cosmos, DeFi, Web3, cryptocurrency, Layer 1',
  authors: [{ name: 'Monchain Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Monchain - Next-Generation Blockchain Platform',
    description: 'Revolutionary Layer 1 blockchain combining EVM compatibility with Cosmos interoperability',
    url: 'https://monchain.org',
    siteName: 'Monchain',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Monchain - Next-Generation Blockchain Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monchain - Next-Generation Blockchain Platform',
    description: 'Revolutionary Layer 1 blockchain combining EVM compatibility with Cosmos interoperability',
    images: ['/og-image.png'],
    creator: '@MonchainOrg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body className={inter.className}>
      {children}
      </body>
      </html>
  )
}