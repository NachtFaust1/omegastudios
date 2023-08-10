'use client'
import { Testimonial, Footers } from "../components/index";

export const metadata = {
    title: 'Home - Omega Studios',
}

export default function Home() {
  const buttonClick = () => {
      window.location.href = "https://discord.gg/JPFAzkWDPR"
  }
  return (
    <>
        <div className="relative flex flex-col items-center justify-center h-[40rem] container">
            <div className='max-w-3xl text-center'>
                <div className='flex flex-wrap justify-center'>
                    <div className='text-center text-sm font-medium leading-snug text-white'>
                        <p>Made With Passion</p>
                    </div>
                    <div className='text-center text-6xl font-bold leading-snug text-white'>
                        <h1>Unleash your Potential</h1>
                    </div>
                </div>
                <p className='mt-3 text-gray-400 font-medium'>
                    We're <span className="underline">Omega Studios</span> a team of developers that develops projects, mostly discord bots and websites.
                </p>
                <div className="flex flex-row items-center justify-center space-x-3">
                      <button type="button" onClick={() => buttonClick()} className="mt-6 px-6 py-3 bg-_secondary border border-zinc-500/10 rounded-full hover:bg-_gray-600 hover:border-zinc-500/50 active:bg-_gray-500 active:border-zinc-500/30 transition-all duration-200 text-white flex items-center font-medium trackint-tight">
                          <i className="fa-brands fa-discord"></i>
                          <span className="ml-4">Join our Discord</span>
                      </button>
                </div>
            </div>
        </div>
        <Testimonial />
        <Footers />
    </>
  )
}