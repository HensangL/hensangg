import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <section id='footer'>
    <footer className="bg-gray-950 text-white font-mono py-10 px-6 border-t-2 border-green-600">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">

        <h2 className="text-xl md:text-2xl font-bold">Contact Me</h2>

        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/HensangL" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hensang-lama-6460a8354/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/hensanglama/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
            <FaInstagram />
          </a>
          <a href="mailto:lamahensang100@gmail.com" className="hover:text-green-400">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} Hensang Dorjee Lama. All rights reserved.</p>
      </div>
    </footer>
    </section>
  )
}

export default Footer
