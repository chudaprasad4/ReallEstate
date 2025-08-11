import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import PropertyDetails from './pages/PropertyDetails.jsx'

export default function App() {
  return (
    <Layout>
      <Box maxW="1280px" m="auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </Box>
    </Layout>
  )
}
