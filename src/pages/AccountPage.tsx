import NavBar from '../components/NavBar'

const AccountPage: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">
      <div className="min-h-screen pb-16 flex flex-col items-center justify-center">
        <button className="mt-4 px-4 py-2 bg-hiltonblue text-white rounded-md">
          Sign In
        </button>
        <button className="mt-4 px-4 py-2 bg-white border border-hiltonblue text-hiltonblue rounded-md">
          Sign Up
        </button>
        <NavBar />
      </div>
    </div>
  )
}

export default AccountPage
