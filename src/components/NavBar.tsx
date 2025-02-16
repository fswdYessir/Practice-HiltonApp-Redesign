import { Home, Search, User, HelpCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const NavBar: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] mx-auto bg-white shadow-lg border-t flex justify-around py-3 px-4 rounded-lg">
      <NavItem to="/" icon={Home} active={location.pathname === '/'} />
      <NavItem to="/" icon={Search} active={location.pathname === '/search'} />
      <NavItem
        to="/account"
        icon={User}
        active={location.pathname === '/account'}
      />
      <NavItem
        to="/help"
        icon={HelpCircle}
        active={location.pathname === '/help'}
      />
    </nav>
  )
}

const NavItem: React.FC<{
  to: string
  icon: React.ElementType
  active: boolean
}> = ({ to, icon: Icon, active }) => {
  return (
    <Link
      to={to}
      className={`p-2 transition-all ${
        active ? 'text-hiltonblue' : 'text-gray-500 hover:text-hiltonblue'
      }`}
    >
      <Icon size={28} />
    </Link>
  )
}

export default NavBar
