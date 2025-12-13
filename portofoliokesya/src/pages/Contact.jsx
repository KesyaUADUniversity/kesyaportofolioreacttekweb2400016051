import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Hire Me</h1>
        <p className="text-gray-300 mb-8">
          I'm currently available for freelance or full-time opportunities.
        </p>
        <p><strong>Email:</strong> kesyaalleta@example.com</p>
        <p><strong>Location:</strong> Yogyakarta, Indonesia</p>
        <div className="mt-8">
          <Link to="/" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}