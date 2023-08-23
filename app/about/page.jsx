import Image from "next/image";
import { team } from "../../constants";


export default function About() {
    
    const imageProperties = {
        color: 'transparent',
        position: 'absolute',
        inset: '0px',
    }

    return (
        <>
            <div className="w-full min-h-[20rem] flex items-center">
                <div className="w-full flex justify-between items-center container">
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start justify-center h-full w-full">
                        <h1 className="text-6xl font-bold text-white">About Us</h1>
                        <p className="text-gray-400 mt-2 max-w-xl trackint-tight font-medium">Discover Omega Studios' visionary creators, expert technicians, and dedicated virtuosos. We turn concepts into reality through unwavering dedication. Welcome to innovation. Welcome to Omega Studios.</p>
                    </div>
                    <img src="https://i.imgur.com/OKTPfAw.png" className="hidden lg:block w-auto h-72"></img>
                </div>
            </div>
            <div className="border-gradient-after"></div>
            <div className="container w-full mt-12">
                <div className="mt-12">
                    <h1 className="text-4xl font-bold text-white">Meet the Team</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full mt-5 justify-start items-center">
                        {team.map((m) => (
                            <div className="w-full flex items-center justify-center border-[1px] border-white/30 p-6 rounded-lg gap-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ">
                                    <Image key={m.id} alt={m.id} src={m.image} width='150' height='150' style={imageProperties} />
                                </div>
                                <div className="w-full flex flex-col">
                                    <p className="text-white text-[16px] font-medium">{m.name}</p>
                                    <p className="text-white opacity-50 text-[14px]">{m.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}