import Image from 'next/image'
import Link from 'next/link'

export default function Landing2() {
    return (
        <div className='bg-yellow-50'>

            <div className=" flex  justify-evenly py-24 md:px-10 items-center relative flex-wrap ">
                <Image src="/image.png" alt="animated logo" width={1920} height={1080} className=' w-[600px] h-[600px]  object-contain ' />
                <div className='px-5 md:px-10 font-medium   z-50  '>
                    <div className='flex flex-wrap text-xs md:text-base '>
                        Explore breathtaking landmarks: From the majestic Taj Mahal to bustling bazaars, immerse yourself in stunning 3D renditions of iconic Indian locations.
                        Unravel Arya's story: Help her navigate grief, forge new connections, and rediscover the strength within.
                        Authentic Indian experience: Savor the sights, sounds, and flavors of India. Learn about local customs, traditions, and rich cultural heritage through interactive experiences.
                        Support local artisans: Find hidden treasures crafted by skilled artisans from across the country. Every purchase within the game supports real-world artisans!
                        Learn & Play: Unearth fascinating facts about Indian history and culture in a fun and engaging way.
                        Tales from the Subcontinent is more than a game; it's a transformative experience.
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='flex justify-center items-center  gap-16 py-10 flex-wrap'>
                <p className='text-2xl font-black text-center md:text-start '>Watch the Trailer Now</p>
                <iframe
                    width="800"
                    height="400"
                    src="https://www.youtube.com/embed/P2CxQcc8oJQ"
                    title="YouTube video player"
                    frameborder="0"
                    className='w-[350px] h-[200px] md:w-[800px] md:h-[400px]'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>

    )
} 