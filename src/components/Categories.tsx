import { Hotel, Landmark, PawPrint, Users, Briefcase } from 'lucide-react'
import { useState } from 'react'

const Categories: React.FC = () => {
  const [selected, setSelected] = useState<string>('Hotels')

  const categoryList = [
    { name: 'Hotels', icon: Hotel },
    { name: 'Resort', icon: Landmark },
    { name: 'Pet', icon: PawPrint },
    { name: 'Family', icon: Users },
    { name: 'Business', icon: Briefcase },
  ]

  return (
    <div className="p-5">
      <h3 className="text-xl font-semibold mb-5 text-gray-900">Categories</h3>
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2">
        {categoryList.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setSelected(name)}
            className={`flex flex-col items-center min-w-[90px] px-4 py-3 rounded-lg text-sm font-medium transition ${
              selected === name
                ? 'bg-hiltonblue text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            <Icon size={20} />
            <span className="mt-1">{name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Categories
