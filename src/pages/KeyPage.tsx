import { ArrowLeft, LockKeyhole, MoreVertical, Phone } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const KeyPage: React.FC = () => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gradient-to-b from-hiltonBlue to-indigo-800 text-white">
      <img src="/logoWhite.png" alt="logo" className="mt-28 w-[180px]" />

      <p className="absolute top-6 left-14 font-semibold">Digital Key</p>
      <div className="absolute top-4 left-4">
        <button className="p-2" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} className="text-white" />
        </button>
      </div>
      <button className="absolute top-4 right-4 p-2">
        <MoreVertical size={24} className="text-white" />
      </button>

      <h1 className="text-xl font-semibold mt-10 tracking-wide">
        Hilton Grand Resort
      </h1>
      <h2 className="text-4xl font-bold mt-2">Room 871</h2>
      <div className="relative w-64 h-64 bg-white/50 rounded-full flex items-center justify-center shadow-xl mt-10 transition-all">
        <div className="relative w-60 h-60 bg-white/70 rounded-full flex items-center justify-center shadow-xl transition-all">
          <div
            className="relative w-52 h-52 bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <LockKeyhole
              size={hovered ? 85 : 70}
              className="text-hiltonBlue transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <p className="text-white text-sm font-medium mt-7 opacity-90">
        Hold your phone near the door lock to unlock
      </p>

      <p className="text-white text-sm mt-5">
        Need help? Contact the front desk
      </p>
      <button className="flex items-center justify-center gap-2 text-white px-4 py-2 rounded-md shadow-md hover:bg-white/50 transition">
        <Phone size={18} />
        <span>+1 (555) 123-4567</span>
      </button>
    </div>
  )
}

export default KeyPage
