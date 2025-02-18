import HotelDetail from './components/HotelDetail'
import AccountPage from './pages/AccountPage'
import HelpPage from './pages/HelpPage'
import HomePage from './pages/Homepage'
import KeyPage from './pages/KeyPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/key" element={<KeyPage />} />
        <Route path="/hotel/:id" element={<HotelDetail />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  )
}

export default App
