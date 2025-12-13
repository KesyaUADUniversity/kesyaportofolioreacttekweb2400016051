import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Work</h1>
        <div className="space-y-8">
          {["Web Design", "Mobile App", "UI/UX Design"].map((title, i) => (
            <div key={i} className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-gray-400 mb-4">Project description here.</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}