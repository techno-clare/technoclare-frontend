import React from 'react'
import HighlightedText from '../components/HomePage.jsx/HighlightedText'
import CTAButton from '../components/Core/CTAButton'
import heroimg from '../assets/bro.svg'
import gradient from '../assets/gradient.svg'
import Disc from '../assets/Disc.svg'
const Home = () => {
  return (
    <div className='relative'>
        <div className="w-10/12 h-auto mx-auto">-
            <img src={gradient} alt="Gradient" width={650} className='absolute top-10 right-0'/>
            <section className="w-full h-[calc(100vh-5rem)] flex justify-center items-center">
                <div className="w-1/2">
                    <p className="text-palewhite-10 font-bold text-[4rem] leading-[4.25rem]">
                        Innovative Tech 
                        <br/> Solutions to 
                        <br/> Transform Your 
                        <br/>
                    </p>
                    <div className="h-14 w-[16.6rem] flex items-center bg-cyan-5 mt-2">
                    <p className='mx-1 mb-2 text-palewhite-10 font-bold text-[4rem]'>Business</p>
                    </div>
                    <div className='w-fit'>
                        <CTAButton text={`GET STARTED`} path={"/services"}/>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={heroimg} alt="Hero Image" width={600} loading="lazy"/>
                    
                </div>
            </section>
            <section className='w-full h-screen mt-[4rem]'>
                <p className="text-palewhite-10 font-bold text-[6rem] leading-[6rem]">
                    Get To Know More  
                </p>
                <div className="flex gap-4">
                    <p className="text-palewhite-10 font-bold text-[6rem] leading-[6rem]">About</p>
                    <div className="h-[5.25rem] w-[35rem] flex items-center bg-cyan-5 mt-2">
                        <p className='mx-1 mb-2 text-palewhite-10 font-bold text-[6rem]'>TechnoClare</p>
                    </div>
                </div>
                <div className="flex gap-40">
                    <div className="w-1/3">
                        <img src={Disc} alt="Disc image" width={800} className='absolute left-0 top-[32.5rem]'/>
                    </div>
                    <div className="2/3 z-10">
                        <p className='w-full text-2xl text-palewhite-5 mt-10'>At Technoclare, we are committed to delivering innovative solutions
                            that empower businesses to succeed. Founded in [2024], our mission is to 
                            transform ideas into reality through technology and creativity. Our core 
                            values—integrity, innovation, and customer-first approach—guide everything we do.
                            <br/><br/>
                            Our expert team consists of experienced professionals passionate about driving growth
                            and solving challenges. From developers to designers, each member contributes unique
                            expertise to create exceptional results.
                            <br/><br/>
                            Why Choose Us? We provide top-notch service, innovative solutions tailored to your
                            needs, and unparalleled support, making us the ideal partner for your business growth.
                        </p>
                        <div className='w-fit mt-5'>
                            <CTAButton text={`LEARN MORE`} path={"/about"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='w-screen h-screen'>
                <div className="">services</div>
            </section>
        </div>
    </div>
  )
}

export default Home