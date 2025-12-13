import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Sima Andriansyah</Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className={`hover:text-blue-500 ${location.pathname === '/' ? 'font-bold text-blue-600' : ''}`}
          >
            Beranda
          </Link>
          <Link
            to="/projects"
            className={`hover:text-blue-500 ${location.pathname === '/projects' ? 'font-bold text-blue-600' : ''}`}
          >
            Proyek
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition"
          >
            Kontak Saya
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar