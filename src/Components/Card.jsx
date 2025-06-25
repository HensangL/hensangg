import React from 'react'

const Card = ({ image, t1, t2, title, des, link }) => {
  return (
    <div className='flex flex-col w-[90%] sm:w-[300px] md:w-[330px] h-auto border-2 border-green-500 rounded-lg overflow-hidden bg-gray-800 text-white shadow-md'>
      
      <img src={image} className='w-full h-[210px]' alt="project" />
      
      <div className='p-4 space-y-2'>
        <p className='text-sm text-green-400'>{t1}, {t2}</p>
        <hr className='border-gray-600' />
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-sm text-gray-300'>{des}</p>

        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className='mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-blue-400 font-semibold rounded-2xl border border-blue-400 transition duration-200'>
              View Project
            </button>
          </a>
        )}
      </div>
    </div>
  )
}

export default Card
