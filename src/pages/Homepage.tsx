import Categories from '../components/Categories'
import HotelList from '../components/HotelList'
import NavBar from '../components/NavBar'
import { Search } from 'lucide-react'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 max-w-md mx-auto pb-20 relative">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-5">
        <div className="p-5 flex justify-between items-center border-b border-gray-200">
          <img src="/logo.png" alt="Hilton Logo" className="h-12" />
          <button className="bg-hiltonblue hover:bg-white hover:text-hiltonblue text-white px-5 py-2 rounded-lg text-sm font-medium transition font-hilton">
            Book Now
          </button>
        </div>
        <div>
          <img
            src="/banner.jpg"
            alt="Banner"
            className="w-full overflow-hidden pb-5"
          ></img>
        </div>
        {/* Search Section */}
        <div className="p-5">
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            Find Your Desired Vacation
          </h2>
          <div className="flex items-centerbg-white border border-gray-300 p-3 py-1.5 rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full bg-transparent outline-none text-gray-700 px-5"
            />
            <button className="p-2 bg-hiltonblue text-white rounded-2xl hover:bg-white hover:text-hiltonblue">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Categories Component */}
        <Categories />

        {/* Recommended Hotels Component */}
        <HotelList />
      </div>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] mx-auto  z-20">
        <NavBar />
      </div>
    </div>
  )
}

export default HomePage
