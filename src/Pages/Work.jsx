import React from 'react'
import Card from '../Components/Card'
import photo from '../image/passport.JPG'

function Work() {
  return (
    <section id='work' className="px-4 py-8 bg-gray-950 text-white font-mono">
      <div className='max-w-7xl mx-auto border-2 border-green-600 p-4 rounded-xl'>
        
        {/* Header */}
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-xl md:text-2xl font-bold'>Projects</h1>
          <h1 className='text-blue-400 cursor-pointer text-sm md:text-base'>View all</h1>
        </div>

        {/* Cards Section */}
        <div className='flex flex-wrap gap-25 justify-center md:justify-start'>
          <Card 
            image={photo}
            t1="HTML"
            t2="CSS"
            title="Portfolio Website"
            des="A personal portfolio built using React and Tailwind CSS."
            link="#"
          />
          <Card 
            image={photo}
            t1="HTML"
            t2="CSS"
            title="Portfolio Website"
            des="A personal portfolio built using React and Tailwind CSS."
            link="#"
          />
          <Card 
            image={photo}
            t1="HTML"
            t2="CSS"
            title="Portfolio Website"
            des="A personal portfolio built using React and Tailwind CSS."
            link="#"
          />
        </div>

      </div>
    </section>
  )
}

export default Work
