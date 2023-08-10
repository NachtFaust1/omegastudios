'use client'
import '../globals.css';
import { Navbars } from "../components/index"

export default function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className='xl:hidden w-full'>
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
        {children}
      </body>
    </html>
  )
}
