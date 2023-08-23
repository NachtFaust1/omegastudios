import { Navbars } from '../../components';
import '../globals.css';
import toast, { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Login - Omega Studios',
  description: 'Omega Studios is a team of developers that develops projects, mostly discord bots and websites.',
  image: '',
  site_name: 'Omega Studios',
  type: 'website',
  url: 'https://omegastudios.dev',
}

export default function LoginLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:type" content={metadata.type} />
          <meta property="og:image" content={metadata.image} />
          <meta property="og:url" content={metadata.url} />
          <meta property="og:site_name" content={metadata.site_name} />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"></link>
        </head>
        <body>
          <div className='hidden xl:block w-full'>
            <Navbars />
          </div>
          <main className='min-w-[32svh]'>
              {children}
          </main>
        </body>
      </html>
    </>
  )
}
