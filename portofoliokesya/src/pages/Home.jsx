import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-12">
      {/* Hero */}
      <section className="py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Kesya Alleta</h1>
          <p className="text-xl text-gray-300">Creative Frontend Developer | student major information system</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition">
              Hire Me
            </Link>
            <Link to="/projects" className="border border-purple-600 hover:bg-purple-900 px-6 py-3 rounded-lg transition">
              View Work
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 border-2 border-purple-600 rounded-full flex items-center justify-center">
            <span>Profile</span>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Web Design", "Mobile App", "UI/UX Design"].map((title, i) => (
            <div key={i} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <span>{title}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold">{title}</h3>
                <Link to="/projects" className="text-purple-400 hover:text-purple-300">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="py-16 bg-gray-900 rounded-2xl">
        <h2 className="text-2xl font-bold mb-8 text-center">Why Hire Me?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["Reliable", "Always on time", "bg-blue-500"],
            ["Expertise", "Modern Tech Stack", "bg-green-500"],
            ["Innovative", "Creative Solutions", "bg-yellow-500"],
            ["Responsive", "Mobile First", "bg-red-500"]
          ].map(([title, desc, color], i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg">
              <div className={`${color} w-12 h-12 rounded-full mx-auto mb-4`}></div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-400 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 mt-16 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© 2025 kesya alleta. All rights reserved.</p>
          <div className="flex gap-5 mt-4 md:mt-0">
            {["GitHub", "LinkedIn", "Twitter"].map((name, i) => (
              <a
                key={i}
                href={`https://${name.toLowerCase() === 'github' ? 'github.com' : name.toLowerCase() === 'linkedin' ? 'linkedin.com' : 'twitter.com'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}