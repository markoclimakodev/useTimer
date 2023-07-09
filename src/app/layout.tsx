import { B612 } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const b612Mono = B612({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'useTimer(🕘)',
  description:
    '"Enhance productivity with this Pomodoro timer app. Stay focused, manage time effectively, and enjoy music. Try it now!"',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${b612Mono.className} h-screen w-full bg-carbon bg-mobile bg-cover bg-no-repeat md:h-full md:bg-desktop  md:bg-contain xl:bg-cover`}
      >
        {children}
      </body>
    </html>
  )
}
