import NavBar from '../components/NavBar'

const AccountPage: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-gray-100">
      <div className="min-h-screen pb-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl  text-hiltonblue font-bold mb-2">
          Join with Us
        </h1>
        <p className="text-sm  text-gray-600 text-center w-4/5">
          Get our lowest rates, plus the chance to earn free nights, and more.
        </p>

        <div className="mt-6 w-full flex flex-col items-center space-y-3">
          <button className="w-3/5 px-5 py-2 bg-hiltonblue text-white rounded-lg  text-lg shadow-md hover:bg-blue-900 transition-all">
            Sign In
          </button>
          <button className="w-3/5 px-5 py-2 bg-white border border-hiltonblue text-hiltonblue rounded-lg  text-lg shadow-md hover:bg-gray-200 transition-all">
            Sign Up
          </button>
        </div>
      </div>

      <NavBar />
    </div>
  )
}

export default AccountPage
