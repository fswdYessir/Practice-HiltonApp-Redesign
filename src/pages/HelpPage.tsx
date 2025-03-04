import NavBar from '../components/NavBar'
import {
  Headset,
  MessageCircle,
  ShieldAlert,
  User,
  Calendar,
  XCircle,
} from 'lucide-react'

const HelpPage: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gray-100">
      <div className="pt-12 pb-24 px-6">
        <h2 className="text-3xl  text-hiltonBlue font-bold mb-2 text-center mt-10">
          How can we help?
        </h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Find answers to your questions here.
        </p>

        <div className="mt-6 mr-5 ml-5 grid grid-cols-2 gap-4 h-[150px]">
          <HelpCategory icon={User} title="Membership" />
          <HelpCategory icon={ShieldAlert} title="Report an Issue" />
          <HelpCategory icon={Calendar} title="Change Booking" />
          <HelpCategory icon={XCircle} title="Cancel Booking" />
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-xl font-semibold text-gray-900">
            Need More Help?
          </h3>
          <p className="text-gray-600 text-sm">
            Contact us through phone or chat.
          </p>

          <div className="mt-4 flex flex-col space-y-3 items-center">
            <button className="w-3/4 flex items-center justify-center space-x-2 bg-hiltonBlue text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              <Headset size={20} />
              <span>Call Us</span>
            </button>
            <button className="w-3/4 flex items-center justify-center space-x-2 bg-white border-2 border-hiltonBlue/50 text-hiltonBlue py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              <MessageCircle size={20} />
              <span>Chat with Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ 네비게이션 바 */}
      <NavBar />
    </div>
  )
}

// ✅ 카테고리 아이템 컴포넌트
const HelpCategory: React.FC<{ icon: React.ElementType; title: string }> = ({
  icon: Icon,
  title,
}) => {
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-white border-hiltonBlue/50 border-2 rounded-lg hover:bg-gray-200 transition">
      <Icon size={28} className="text-hiltonBlue" />
      <span className="mt-2 text-gray-800 font-medium">{title}</span>
    </button>
  )
}

export default HelpPage
