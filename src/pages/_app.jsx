import '@/styles/globals.css'
import { Press_Start_2P } from 'next/font/google' 

const press = Press_Start_2P({ subsets: ['latin'], weight: ["400"]})

export default function App({ Component, pageProps }) {

  return (
    <main className={press.className}>
      <Component {...pageProps} />
    </main>

  )
}

