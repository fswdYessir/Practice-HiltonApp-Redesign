import { ArrowLeft, MoreVertical, Star, Tag } from 'lucide-react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const hotels = [
  {
    id: 1,
    name: 'Hilton Grand Resort',
    location: 'Marina Bay, Singapore',
    distance: '4.6 km',
    rating: 4.7,
    reviews: 1700,
    description:
      'A luxurious stay experience in the heart of Singapore. Enjoy top-tier amenities, breathtaking city views, and world-class dining. This resort is known for its exclusive spa services, infinity pool, and its close proximity to the Marina Bay Sands.',
    price: '$180.00',
    images: [
      'https://picsum.photos/100/100?random=1',
      'https://picsum.photos/100/100?random=2',
      'https://picsum.photos/100/100?random=3',
      'https://picsum.photos/100/100?random=4',
    ],
    coverImage: 'https://picsum.photos/900/500?random=1',
  },
  {
    id: 2,
    name: 'Hilton City Center',
    location: 'New York, USA',
    distance: '2.3 km',
    rating: 4.6,
    reviews: 1350,
    description:
      'Located in the heart of New York, Hilton City Center provides business and leisure travelers with luxury accommodations and modern facilities. Steps away from Times Square and Central Park, this hotel is perfect for exploring the Big Apple.',
    price: '$250.00',
    images: [
      'https://picsum.photos/100/100?random=5',
      'https://picsum.photos/100/100?random=6',
      'https://picsum.photos/100/100?random=7',
      'https://picsum.photos/100/100?random=8',
    ],
    coverImage: 'https://picsum.photos/900/500?random=2',
  },
]

const HotelDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showFullDesc, setShowFullDesc] = useState(false)

  const hotel = hotels.find(h => h.id === Number(id))

  if (!hotel) {
    return (
      <div className="text-center mt-10 text-gray-500 text-lg font-semibold">
        Hotel not found.
      </div>
    )
  }

  return (
    <div className="bg-gray-100 flex justify-center">
      <div className="w-full bg-white relative">
        <div className="relative w-full h-[400px]">
          <img
            src={hotel.coverImage}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <button
              className="bg-white p-2 rounded-full shadow-md"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
          </div>
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
            <MoreVertical size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="absolute w-full left-0 -mt-20 bg-white rounded-t-3xl shadow-lg p-6 pb-28">
          <h2 className="text-2xl font-bold text-gray-900">{hotel.name}</h2>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <Tag size={16} className="mr-1 text-blue-500" />
            {hotel.distance} • {hotel.location}
          </div>

          <div className="flex items-center mt-2">
            <Star size={18} className="text-yellow-500" />
            <span className="text-gray-800 text-sm font-semibold ml-1">
              {hotel.rating} Ratings
            </span>
            <span className="text-gray-500 text-sm ml-2">
              ({hotel.reviews} Reviewers)
            </span>
          </div>

          <div className="mt-5 text-gray-600 text-sm">
            {showFullDesc
              ? hotel.description
              : `${hotel.description.slice(0, 100)}...`}
            <button
              className="text-blue-500 ml-2 font-medium"
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? 'Show Less' : 'See More'}
            </button>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              House Details
            </h3>
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              {hotel.images.map((img, index) => (
                <div
                  key={index}
                  className="w-[100px] rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`hotel-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[375px] max-w-[430px] bg-white p-5 border-t flex justify-between items-center">
          <span className="text-gray-900 font-bold text-xl">{hotel.price}</span>
          <button className="bg-hiltonblue hover:bg-white hover:text-hiltonblue text-white px-6 py-3 rounded-lg text-sm font-medium transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelDetail
