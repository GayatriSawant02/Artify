import './globals.css'

export const metadata = {
  title: 'Artify - The Modern Art Marketplace',
  description: 'Discover art that speaks to your soul',
  icons: {
    icon: '/favicon.ico.png',
    shortcut: '/favicon.ico.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}