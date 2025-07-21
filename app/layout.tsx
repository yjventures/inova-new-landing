import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Inova AI Solutions - Architecting Your Enterprise AI Future',
  description: 'No-code AI agents, developer power, and industry expertise—unleash the next era of automation.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakartaSans.variable}`}>
      <body className="bg-backgroundDark text-textPrimary font-inter">
        {children}
      </body>
    </html>
  )
}

/*Shammo added the code below so that Navbars and Footers were global but it resulted in double navbar and footer everywhere so he's waiting for Youssef/Abrar for the next step. 
Either remove the navbar and footer in every page and only have it in the layout.tsx or manually add it in every page and layput.tsx won't have it*/

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${jakartaSans.variable}`}>
//       <body className="bg-backgroundDark text-textPrimary font-inter">
//         <Navigation />
//         {children}
//         <MegaFooter />
//       </body>
//     </html>
//   );
// }