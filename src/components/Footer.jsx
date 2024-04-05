import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube, AiFillLinkedin } from "react-icons/ai";
import Image from 'next/image'


export default function Footer() {
    return (
        <>

            <footer className=" bg-yellow-50  ">
                <div className="grid grid-cols-2     md:flex justify-center items-center md:items-start py-20 px-10 md:py-40 flex-wrap gap-10 ">
                    <div className="flex flex-col  justify-center items-start">
                        <h1 className="text-sm md:text-xl font-bold ">About</h1>
                        <ul className="py-3">
                            <a href="#" className="text-xs md:text-base"><li>About us</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Newsroom</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Contact us</li></a>

                        </ul>
                    </div>
                    <div className="flex flex-col  justify-center items-start">
                        <h1 className="text-sm md:text-xl font-bold ">Community</h1>
                        <ul className="py-3">
                            <a href="#" className="text-xs md:text-base"><li>Community</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Blogs</li></a>


                        </ul>
                    </div><div className="flex flex-col  justify-center items-start">
                        <h1 className="text-sm md:text-xl font-bold ">Safety Hub</h1>
                        <ul className="py-3">
                            <a href="#" className="text-xs md:text-base"><li>Resources</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Advice</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Approach</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Guide</li></a>



                        </ul>
                    </div><div className="flex flex-col  justify-center items-start">
                        <h1 className="text-sm md:text-xl font-bold ">Privacy Hub</h1>
                        <ul className="py-3">
                            <a href="#" className="text-xs md:text-base"><li>Privacy policy</li></a>
                            <a href="#" className="text-xs md:text-base"><li>Cookies policy</li></a>


                        </ul>
                    </div>
                    <div className="flex flex-col  justify-center items-start">
                        <h1 className="text-sm md:text-xl font-bold ">Support</h1>
                        <ul className="py-3">
                            <a href="#" className="text-xs md:text-base"><li>Help</li></a>
                            <a href="#" className="text-xs md:text-base"><li>FAQ</li></a>


                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center text-4xl gap-7 sm:gap-11 lg:gap-12 xl:gap-14">
                    <button className="bg-yellow-400 p-2 transition rounded-full hover:bg-black group"><AiOutlineInstagram className="group-hover:invert transition" /></button>
                    <button className="bg-yellow-400 p-2 transition rounded-full hover:bg-black group"><AiOutlineTwitter className="group-hover:invert transition" /></button>
                    <button className="bg-yellow-400 p-2 transition rounded-full hover:bg-black group"><AiOutlineYoutube className="group-hover:invert transition" /></button>

                </div>
                <div className="flex justify-evenly items-center py-8">
                    <h1 className="text-sm md:text-xl ">Made with love in India.</h1>
                </div>

            </footer>

        </>
    )
}