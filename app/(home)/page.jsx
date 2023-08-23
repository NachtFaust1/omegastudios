import { Footers, Testimonial } from "../../components"

export default function Home() {
  return (
    <>
        <div className="relative flex flex-col items-center justify-center h-[40rem] container">
            <div className="absolute top-0 pointer-events-none w-full h-[40rem]" style={{ zIndex: '-1' }}>
                <div className="square-shadow w-full h-full absolute" style={{ zIndex: '1' }}></div>
                <div className="bg-squares"></div>
            </div>
            <div className='max-w-3xl text-center'>
                <div className='flex flex-wrap justify-center'>
                    <div className='text-center text-sm font-medium leading-snug text-white opacity-50'>
                        <p>Made With Passion</p>
                    </div>
                    <div className='text-center text-6xl font-bold leading-snug text-white'>
                        <h1>Unleash your Potential</h1>
                    </div>
                </div>
                <p className='mt-3 text-white opacity-50 font-medium'>
                    We're <span className="underline">Omega Studios</span> a team of developers that develops discord bots and websites.
                </p>
                <div className="flex flex-row items-center justify-center space-x-3">
                      <a href="https://discord.gg/JPFAzkWDPR" target="_blank" className="mt-6 px-8 py-3 border-2 border-zinc-500/20 hover:border-zinc-500/50 transition-all duration-all text-white flex items-center font-medium rounded-full">
                          <i className="fa-brands fa-discord"></i>
                          <span className="ml-4">Join our Discord</span>
                      </a>
                </div>
            </div>
        </div>
        {/* <div className="bg-abstract text-white" style={styles}></div> */}
        <Testimonial />
        <Footers />
    </>
  )
}