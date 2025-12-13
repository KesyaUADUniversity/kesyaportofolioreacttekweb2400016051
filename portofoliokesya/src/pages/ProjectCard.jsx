// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom'

export default function ProjectCard({ title, image, link }) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <Link to={link} className="text-purple-400 mt-2 inline-block">View Details →</Link>
      </div>
    </div>
  )
}