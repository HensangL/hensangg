import React from 'react'
import photo from '../image/passport.JPG'

function Home() {
  return (
    <section id='home'>
    <div className="bg-gray-950 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center gap-10 font-mono max-w-5xl w-full">
        <div className="text-center md:text-left flex flex-col">
          <p className="text-2xl md:text-3xl text-white">
            Hensang is a <span className='text-green-300'>web designer</span> and <span className='text-green-300' >frontend developer.</span>
          </p>
          <p className='text-white text-sm'>Hello! I'm Hensang Dorjee Lama, a web designer and frontend developer with a strong passion for creating visually appealing and highly functional websites. I specialize in turning ideas into responsive, user-centered digital experiences using modern tools and technologies like React, Tailwind CSS, and JS.

My focus is on clean code, smooth interactions, and mobile-first design — making sure every website I build is fast, accessible, and optimized for all devices. 

I'm always eager to learn, grow, and bring fresh ideas to the web.</p>
        </div>

        <img
          src={photo}
          alt="Hensang"
          className="w-60 h-60 md:w-[469px] md:h-[386px] rounded-full object-cover border-2 border-green-700"
        />
      </div>
    </div>
    </section>
  )
}

export default Home
