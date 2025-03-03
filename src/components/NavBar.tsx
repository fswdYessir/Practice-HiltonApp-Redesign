import { Home, KeyRound, User, HelpCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const NavBar: React.FC = () => {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] mx-auto bg-white/70 shadow-lg border-t-2 border-hiltonBlue/10 backdrop-blur-md flex justify-around py-3 px-4 rounded-lg z-50">
      <NavItem to="/" icon={Home} active={location.pathname === '/'} />
      <NavItem
        to="/key"
        icon={KeyRound}
        active={location.pathname === '/key'}
      />
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
        active ? 'text-hiltonBlue' : 'text-gray-500 hover:text-hiltonBlue'
      }`}
    >
      <Icon size={28} />
    </Link>
  )
}

export default NavBar
