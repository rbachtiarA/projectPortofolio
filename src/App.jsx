import Navbar from "./components/navbar"
import { Routes, Route } from 'react-router-dom'
import Mainpage from "./pages/main"
import Project from "./pages/project"
import Review from "./pages/review"
import Contact from "./pages/contact"
import Profile from "./pages/profile"
function App() {
  return (
    <div className="h-full md:h-screen flex flex-row md:p-5 animate-spin sm:animate-none">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Mainpage />} />
        <Route path="/Projects" element={<Project /> }></Route>
        <Route path="/Review" element={<Review /> }></Route>
        <Route path="/Contact" element={<Contact /> }></Route>
        <Route path="/Profile" element={<Profile /> }></Route>
      </Routes>
    </div>
  )
}

export default App
