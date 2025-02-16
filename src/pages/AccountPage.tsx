import NavBar from '../components/NavBar'

const AccountPage: React.FC = () => {
  return (
    <div className="min-h-screen pb-16 flex flex-col items-center justify-center">
      <button className="mt-4 px-4 py-2 bg-hiltonblue text-white rounded-md">
        Sign In
      </button>
      <button className="mt-4 px-4 py-2 bg-white borderline-hiltonblue text-hiltonblue rounded-md">
        Sign Up
      </button>
      <NavBar />
    </div>
  )
}

export default AccountPage
