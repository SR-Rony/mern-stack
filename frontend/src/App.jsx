
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Box } from '@chakra-ui/react'
import Nevbar from './components/Nevbar'

function App() {


  return (
    <Box minH={"100vh"}>
      <Nevbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Box>
  )
}

export default App
