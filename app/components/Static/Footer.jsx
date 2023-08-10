import { Links, legalLinks, socialLogo } from '../../constants/index'

export default function Footers() {
    return (
        <>
            <div className='border-gradient-after'></div>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-12 py-12'>
                    <div className='col-span-2 w-3/4'>
                        <div className='select-none flex items-center gap-2 group transition-all duration-200'>
                            <img src="https://i.imgur.com/OKTPfAw.png" width="40" height="40" />
                            <p className='text-lg font-bold text-white'>Omega Studios</p>
                        </div>
                        <p className='text-sm text-gray-300 break-words mt-4'>
                            Omega Studios is a development team founded in 2022. We develop discord bots, website api's and many more.
                        </p>
                        <div className='flex items-center gap-2 mt-4'>
                            <p className='text-xs font-semibold text-gray-400 uppercase flex-shrink-0'>Follow us on</p>
                            <div className='h-[1px] w-full bg-gray-600 rounded-full'></div>
                        </div>
                        <div className='flex gap-2 mt-1 flex-wrap'>
                            {socialLogo.map((a, index) => (
                                <a key={a.id} title={a.title} className='text-white/50 transition-all duration-200 cursor-pointer select-none bg-_secondary w-7 h-7 flex justify-center items-center rounded-md hover:bg-_gray-500 active:bg-_gray-400 hover:text-white active:text-white' href={a.target}>
                                    <i className={a.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-4 flex gap-24 flex-wrap'>
                        <div>
                            <p className='xl:mt-0 text-base text-white font-semibold mb-6'>Links</p>
                            <div className='flex flex-col text-sm space-y-2'>
                                {Links.map((a, index) => (
                                    <a key={a.id} href={a.target} className='text-white/50 transition-all duration-200 cursor-pointer hover:text-white text-[14px] font-medium'>{a.title}</a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='xl:mt-0 text-base text-white font-semibold mb-6'>Legal</p>
                            <div className='flex flex-col text-sm space-y-2'>
                                {legalLinks.map((a, index) => (
                                    <a key={a.id} href={a.target} className='text-white/50 transition-all duration-200 cursor-pointer hover:text-white text-[14px] font-medium'>{a.title}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-gradient-after'></div>
            <div className='container'>
                <div className='flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between w-full text-white py-12'>
                    <p className='text-center lg:text-left text-sm'>© 2022 — 2023 Omega Studios. All Right Reserved</p>
                </div>
            </div>
        </>
    )
}