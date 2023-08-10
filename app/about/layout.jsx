import '../../app/globals.css';
import { Navbars } from "../components/index";

export const metadata = {
  title: 'About - Omega Studios',
  description: 'Omega Studios is a team of developers that develops projects, mostly discord bots and websites.',
  image: '',
  site_name: 'Omega Studios',
  type: 'website',
  url: 'https://omegastudios.dev',
}

export default function AboutLayout({ children }) {
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
        </head>
        <body>
          <div div className='xl:hidden w-full'>
            <div className='container w-full flex justify-between items-center py-6'>
                <a href='/'>
                    <div className='flex items-center gap-2 group hover:opacity-50 transition-all duration-200'>
                      <img src="https://i.imgur.com/OKTPfAw.png" width="70" height="70" />
                    </div>
                </a>
                <div className='flex items-center gap-4'>
                  <i className="fas fa-bars text-2xl text-white"></i>
                </div>
            </div>
          </div>
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
