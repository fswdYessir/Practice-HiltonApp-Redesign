import NavBar from '../components/NavBar'

const HelpPage: React.FC = () => {
  return (
    <div className="max-w-[430px] mx-auto min-h-screen bg-white">
      <div className="min-h-screen pb-16 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold">How can we help?</h2>
        <p className="mt-2 text-gray-600">
          Find answers to your questions here.
        </p>
        <NavBar />
      </div>
    </div>
  )
}

export default HelpPage
