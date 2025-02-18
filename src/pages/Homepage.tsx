import Categories from '../components/Categories'
import HotelList from '../components/HotelList'
import NavBar from '../components/NavBar'
import { Search } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomePage: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">
      {/* Header */}
      <div className="min-h-screen pb-16 flex flex-col  overflow-hidden">
        <div className="p-5 flex justify-between items-center border-b border-gray-200">
          <img src="/logo.png" alt="Hilton Logo" className="h-12" />
          <button className="bg-hiltonBlue hover:bg-white hover:text-hiltonBlue text-white px-5 py-2 rounded-lg text-sm font-medium transition font-hilton">
            Book Now
          </button>
        </div>

        {/* banner */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-[250px]"
        >
          <SwiperSlide>
            <img
              src="/banner1.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/banner2.jpg"
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/banner3.jpg"
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

        {/* Search Section */}
        <div className="p-5">
          <h2 className="text-lg font-semibold mb-3 text-gray-900">
            Find Your Desired Vacation
          </h2>
          <div className="flex rounded-md border border-grey-900 overflow-hidden max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full bg-white text-gray-900 text-sm px-4 py-3"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-hiltonBlue px-3 text-white hover:bg-white hover:text-hiltonBlue"
            >
              <Search size={20} />
            </button>
          </div>
          {/* <div className="flex items-center bg-white border border-gray-300 p-3 py-1.5 rounded-lg shadow-sm">
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full bg-transparent outline-none text-gray-700 px-5"
            />
            <button className="p-2 bg-hiltonBlue text-white rounded-2xl hover:bg-white hover:text-hiltonBlue">
              <Search size={20} />
            </button>
          </div> */}
        </div>

        {/* Categories Component */}
        <Categories />

        {/* Recommended Hotels Component */}
        <HotelList />
      </div>

      {/* Navigation Bar */}
      <NavBar />
    </div>
  )
}

export default HomePage
