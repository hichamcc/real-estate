import type { AppProps } from 'next/app'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Oasis Estate',
    description: 'Oasis Estate',
}

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}