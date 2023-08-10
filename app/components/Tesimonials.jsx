'use client'

export default function Testimonial() {
    const buttonClick = () => {
        window.location.href = "https://discord.gg/JPFAzkWDPR"
    }
    return (
        <>
            <div className="border-gradient-after my-24 pb-12"></div>
            <div className="container space-y-48">
                <div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <h1 className="text-4xl font-bold text-white">Testimonials</h1>
                    </div>
                    <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 ">
                        <div>
                            <div className="relative bg-_secondary border border-zinc-500/10 rounded-xl p-6 w-full">
                                <p className="text-white text-[16px] pb-6">New Testimonails will be imported here soon.</p>
                                <div className="flex gap-4">
                                    <img className="w-10 h-10 rounded-full" src="https://i.imgur.com/OKTPfAw.png" />
                                    <div className="flex flex-col text-sm">
                                        <p className="text-white font-bold">Nacht</p>
                                        <p className="text-zinc-500">Omega Studios, Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative bg-_secondary border border-zinc-500/10 rounded-xl p-6 w-full">
                                <p className="text-white text-[16px] pb-6">New Testimonails will be imported here soon.</p>
                                <div className="flex gap-4">
                                    <img className="w-10 h-10 rounded-full" src="https://i.imgur.com/OKTPfAw.png" />
                                    <div className="flex flex-col text-sm">
                                        <p className="text-white font-bold">Nacht</p>
                                        <p className="text-zinc-500">Omega Studios, Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative bg-_secondary border border-zinc-500/10 rounded-xl p-6 w-full">
                                <p className="text-white text-[16px] pb-6">New Testimonails will be imported here soon.</p>
                                <div className="flex gap-4">
                                    <img className="w-10 h-10 rounded-full" src="https://i.imgur.com/OKTPfAw.png" />
                                    <div className="flex flex-col text-sm">
                                        <p className="text-white font-bold">Nacht2366</p>
                                        <p className="text-zinc-500">Omega Studios, Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-36">
                    <div className="relative bg-_secondary hover:bg-_gray-600 border border-zinc-500/10 rounded-xl p-8 w-full">
                        <div className="flex px-8 flex-col justify-center items-center gap-2">
                            <div className="flex w-full flex-col items-center">
                                <div className="flex justify-center items-center gap-2">
                                    <p className="text-center text-gray-300 text-[16px] pb-6 max-w-2xl">
                                        Ignite your full potential with Omega Studios. Elevate your skills, amplify your creativity, and shape a limitless future. Join a community of innovators, guided by industry pioneers, and unleash your boundless capabilities. Your journey to excellence starts here. Omega Studios: Where Your Potential Soars.
                                    </p>
                                </div>
                                <div className="flex justify-center items-center gap-2 self-stretch">
                                    <button onClick={() => buttonClick()} className="mt-6 px-6 py-3 bg-_secondary border border-zinc-500/10 rounded-full hover:bg-_gray-600 hover:border-zinc-500/50 active:bg-_gray-500 active:border-zinc-500/30 transition-all duration-200 text-white flex items-center font-medium trackint-tight">
                                        <i className="fab fa-discord"></i>
                                        <span className="ml-4">Join our Discord</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}