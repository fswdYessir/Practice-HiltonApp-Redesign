import { Heart, MapPin, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HotelList: React.FC = () => {
  const navigate = useNavigate()

  const hotels = [
    {
      id: 1,
      name: 'Hilton Grand Resort',
      location: 'Marina Bay, Singapore',
      description: 'Luxurious stay experience',
      rating: 4.7,
      image: '/room1.jpg',
    },
    {
      id: 2,
      name: 'Hilton City Center',
      location: 'New York, USA',
      description: 'Prime location for business travelers',
      rating: 4.6,
      image: '/room2.jpg',
    },
    {
      id: 3,
      name: 'Hilton Beachside',
      location: 'Miami, USA',
      description: 'Relax with an oceanfront view',
      rating: 4.0,
      image: '/room3.jpg',
    },
    {
      id: 4,
      name: 'Hilton Mountain',
      location: 'Aspen, USA',
      description: 'Perfect getaway in the mountains',
      rating: 4.0,
      image: '/room4.jpg',
    },
    {
      id: 5,
      name: 'Hilton Luxury Suites',
      location: 'Paris, France',
      description: 'Stay in luxury with city views',
      rating: 5.0,
      image: '/room5.jpg',
    },
  ]

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-xl font-semibold text-gray-900">For You</h3>
        <p className="text-hiltonBlue hover:text-gray-400 text-sm  transition">
          See all
        </p>
      </div>
      <div>
        <h3 className="text-gray-500 text-sm transition mb-8">
          Our Recommended Place To Stay
        </h3>
      </div>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-10 mb-10">
        {hotels.map(hotel => (
          <div
            key={hotel.id}
            onClick={() => navigate(`/hotel/${hotel.id}`)}
            className="bg-white border-b-2 border-gray-300/50 rounded-2xl min-w-[260px] overflow-hidden relative cursor-pointer transition-transform hover:scale-105"
          >
            <button className="absolute top-3 right-3 bg-white/60 p-1.5 rounded-full shadow-md z-10">
              <Heart size={16} className="text-gray-500" />
            </button>

            <div className="relative w-full h-40 overflow-hidden rounded-t-2xl">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900 text-lg truncate">
                  {hotel.name}
                </h4>
                <div className="flex items-center text-sm font-semibold text-gray-700">
                  <Star size={16} className="text-yellow-500 mr-1" />
                  {hotel.rating}
                </div>
              </div>

              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin size={14} className="mr-1" />
                {hotel.location}
              </div>
              <p className="text-sm text-gray-500 mt-1">{hotel.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelList
