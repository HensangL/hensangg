import React from 'react'

function Skills() {
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['React.js', 'Tailwind CSS', 'React Router DOM'],
    tools: ['Vite', 'Node.js', 'npm'],
    devSkills: [
      'Responsive Web Design',
      'Reusable React Components',
      'Section Navigation',
      'Component-based Layout',
    ],
    systems: ['SSH', 'IPv6', 'Linux/Windows Networking', 'SDN (OpenFlow)'],
  }

  return (
    <section id="skills" className="bg-gray-950 text-white font-mono py-10 px-6">
      <div className="max-w-6xl mx-auto border-2 border-green-600 p-6 rounded-xl">
        
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm md:text-base">

          <div>
            <h2 className="text-green-400 text-lg mb-2">Languages</h2>
            <ul className="space-y-1">
              {skills.languages.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-green-400 text-lg mb-2">Frameworks & Libraries</h2>
            <ul className="space-y-1">
              {skills.frameworks.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-green-400 text-lg mb-2">Tools</h2>
            <ul className="space-y-1">
              {skills.tools.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-green-400 text-lg mb-2">Frontend & Web Skills</h2>
            <ul className="space-y-1">
              {skills.devSkills.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-green-400 text-lg mb-2">Systems Knowledge</h2>
            <ul className="space-y-1">
              {skills.systems.map((item, i) => <li key={i}>• {item}</li>)}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
