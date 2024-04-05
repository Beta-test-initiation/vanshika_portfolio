import { useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import MainMenu from "./MainMenu";



export default function Header() {
    const [isVisible, setVisibility] = useState(false)
    const shownavbar = () => {
        setVisibility(!isVisible)

    }


    return (
        <>
            <div className="relative isolate bg-yellow-50 h-screen ">
                <nav className="bg-yellow-50 py-10 md:px-10 flex justify-center items-center absolute w-full top-0 left-0">
                    <h1 className="text-xs xl:text-xl">Tales from the Subcontinent</h1>
                </nav>
                <video width="1920" height="1080" className=" w-full h-full -z-10  xl:block  object-cover " autoPlay muted loop preload="none">
                    <source src="/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className=" flex justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-400 md:text-[30px] text-center xl:text-[50px] font-black w-full px-20">
                    Embark on a Healing Adventure in Tales from the Subcontinent: The Heritage Trail!
                </div>
            </div>
        </>
    )
}
