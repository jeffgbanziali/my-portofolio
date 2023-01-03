import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black  to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-white text-4xl sm:text-7xl font-bold'>I'm a Front-End Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        I am a 2nd year Bachelor in Engineering and Digital at the School of Digital Engineering, Efrei Paris, located in Villejuif.
                        I am a beginner developer with at least one year of experience in coding
                        I am in the Paris region in the small town of Longjumeau (91160), in France
                        I have a passion for creating beautiful and functional websites and native mobile apps.
                        I am a self-taught developer who is always looking to learn new things and improve my skills.
                        My favorite technologies are React.js, React-Native, HTML5/CSS3, JavaScript, Tailwind
                    </p>

                    <div>
                        <button className='cursor-pointer text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                            Portofolio
                            <span className='hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1 ' />
                            </span>
                        </button>
                    </div>

                </div>
                <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md:full' />
                </div>
            </div>
        </div>
    )
}

export default Home
