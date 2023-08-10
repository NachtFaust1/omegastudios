import './globals.css'

export const metadata = {
  title: 'Home - Omega Studios',
  description: 'Omega Studios is a team of developers that develops projects, mostly discord bots and websites.',
  image: '',
  site_name: 'Omega Studios',
  type: 'website',
  url: 'https://omegastudios.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"></link>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
