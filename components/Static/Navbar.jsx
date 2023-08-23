'use client'
import { useState } from "react";
import { navLinks } from "../../constants/index";
import Link from "next/link";
import { useRouter } from "next/navigation";

const MobileNavbar = ({ Menu, open, setOpen, navItems }) => {
    const router = useRouter()

    return (
        <>
            <div onClick={() => setOpen(false)} className={`${open ? '' : 'hidden'} w-full h-full z-[50] fixed overflow-none top-0 backdrop-blur-sm lg:hidden`} />
            <div className={`transform ${open ? '' : 'translate-x-full'} transition-all duration-300 bg-black bg-opacity-95 text-white w-full fixed rounded-l-xl z-[60] right-0 top-0 h-full lg:translate-x-full`}>
                <div className="relative w-full h-full">

                    <div className="flex justify-between border-b border-white/20 items-center px-5 py-4">
                        <div className="flex items-center">
                            <img src="https://i.imgur.com/OKTPfAw.png" width="70" height="70" />
                            <p className=" font-extrabold ml-1 text-2xl">Omega Studios</p>
                        </div>
                        {/* <button onClick={() => setOpen(!open)}><i className="cursor-pointer fa fa-times text-xl mr-2" /></button> */}
                    </div>
                    {navItems.map((item, itemIndex) => (
                        <Link href={item.target} key={itemIndex}>
                            <div key={itemIndex} className={`${router.asPath === item.target ? 'bg-white bg-opacity-5' : ''} my-2 cursor-pointer p-4 opacity-75 hover:opacity-100 hover:underline transition-all duration-150 block`}>
                                <i className={`${router.asPath === item.target ? item.activeIcon : item.icon} mr-2`} />{item.title}
                            </div>
                        </Link>
                    ))}
                    <div className="flex items-center px-6">
                        <i className="cursor-pointer fas fa-arrow-right text-xl mt-8" onClick={() => setOpen(!open)} />
                    </div>
                </div>
            </div>
        </>
    )
}


export default function Navbars({ $, navItems }) {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    
    const login = () => {
        window.location.href = "https://discord.gg/JPFAzkWDPR"
    }

    return (
        <>
            <div className="w-full">
                <div className="flex p-4 xs:p-0 flex-col justify-center items-center gap-2">
                    <div className="container flex p-2 flex-col justify-center items-center gap-2">
                        <div className="flex w-full justify-between items-center">
                            <a href="/">
                                <div className="flex items-center gap-2 group hover:opacity-50 transition-all duration-200">
                                    <img src="https://i.imgur.com/OKTPfAw.png" width="70" height="70" />
                                    <p className="text-xl hidden lg:flex xl:flex font-bold text-white">Omega Studios</p>
                                    <p className="text-xl lg:hidden md:flex xl:hidden font-bold text-white">Omega</p>
                                </div> 
                            </a>
                            <div className="hidden lg:flex md:flex xl:flex flex-start gap-4">
                                {navLinks.map((link, index) => (
                                    <Link key={link.id} href={link.target} className="z-[1] relative px-3 py-1.5 flex items-center text-base font-medium text-white/50 hover:text-white transition-all duration-200">{link.title}</Link>
                                ))}
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                {/* <div>
                                    <i className="fal fa-sun mr-1 text-2xl text-white"></i>
                                </div> */}
                                <div className="lg:hidden md:hidden">
                                    <i className="fas fa-bars text-3xl text-white cursor-pointer" onClick={() => setOpen(!open)}></i>
                                </div>
                                <button onClick={() => router.push('/login')} className="hidden lg:flex md:flex xl:flex px-8 py-3 border-2 border-zinc-500/20 hover:border-zinc-500/50 transition-all duration-all text-white items-center font-medium rounded-full">
                                    <p className="text-white items-center">Dashboard </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileNavbar open={open} setOpen={setOpen} navItems={navLinks} Menu={() => setOpen(!open)} />
            </div>
        </>
    )
}
