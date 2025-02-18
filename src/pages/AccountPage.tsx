import NavBar from '../components/NavBar'

const AccountPage: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">
      <div className="min-h-screen pb-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-hiltonSerif text-hiltonblue font-bold mb-1">
          Join with us
        </h1>
        <p className="text-sm font-hiltonSerif text-gray-600 mb-2">
          Get our lowest rates, plus the chance to earn free nights, and more.
        </p>
        <button className="mt-4 px-5 py-2 bg-hiltonblue text-white rounded-md font-hiltonSerif">
          Sign In
        </button>
        <button className="mt-4 px-5 py-2 bg-white border border-hiltonblue text-hiltonblue rounded-md font-hiltonSerif">
          Sign Up
        </button>
        <NavBar />
      </div>
    </div>
  )
}

export default AccountPage
