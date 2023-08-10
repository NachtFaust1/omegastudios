'use client'
import { navLinks } from "../../constants/index";
import Link from "next/link";

export default function Navbars() {
    const buttonClick = () => {
        window.location.href = "https://discord.gg/JPFAzkWDPR"
    }
    return (
        <div className="flex p-4 flex-col justify-center items-center gap-2">
            <div className="container flex p-2 flex-col justify-center items-center gap-2">
                <div className="flex w-full justify-between items-center">
                    <a href="/">
                        <div className="flex items-center gap-2 group hover:opacity-50 transition-all duration-200">
                            <img src="https://i.imgur.com/OKTPfAw.png" width="70" height="70" />
                            <p className="text-xl font-bold text-white">Omega Studios</p>
                        </div> 
                    </a>
                    <div className="flex flex-start gap-4">
                        {navLinks.map((link, index) => (
                            <Link key={link.id} href={link.target} className="z-[1] relative px-3 py-1.5 flex items-center text-base font-medium text-gray-500 hover:text-white transition-all duration-200">{link.title}</Link>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center flex-end gap-4">
                        <button onClick={() => buttonClick()} className="flex items-center group gap-2 border-_gray-800 border-[1.5px] bg-_gray900/20 hover:bg-_gray-900/50 active:bg-_gray-900/80 transition-all duration-200 px-8 py-3 rounded-full">
                            <p className="text-white items-center">Dashboard <i className="fa-solid fa-arrow-left-long fa-flip-horizontal ml-2"></i></p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
