import './Globals.css'
import { Montserrat, Noto_Sans } from '@next/font/google'


const mont = Montserrat({
    weight : ['400', '500', '700'],
    subsets : ['latin'],
    display : 'swap',
    variable : '--mont'
})


const noto = Noto_Sans({
    weight : ['400'],
    subsets : ['latin'],
    display : 'swap',
    variable : '--noto'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mont.variable} ${noto.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  )
}
