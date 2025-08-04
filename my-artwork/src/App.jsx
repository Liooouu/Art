import { ArtPage } from "../Pages/ArtPage"
import { Navbar } from "../Components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import { WelcomePage } from "../Pages/WelcomePage";
import { About } from "../Pages/AboutPage";


export const Home = () => {
  return (
    <>
    <Navbar/>
      <main className="flex justify-center items-center flex-col font-montserrat text-[#364687] lg:text-4xl md:text-3xl font-bold min-h-screen">
        <div className="container flex justify-center items-center flex-col h-[50vh] w-max md:space-y-2 lg:space-y-4">
          <p className="sm:text-2xl lg:text-3xl font-semibold">WELCOME TO </p>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>My Project</p>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>In GEARTS+ ARTS APPRECIATION</p>
        </div>

        {/* Photo */}
        <div className="mb-6">
          <img
            src="/images/Photo1.jpg" // Correct path for Vite/React static assets
            alt="Cover Photo"
            className="w-full max-w-md rounded shadow-lg"
          />
        </div>

        {/* Centered Button */}
        <Link
          to="/welcome"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Welcome Page
        </Link>
      </main>
    </>
  );
};


function App() {

  return (
 <>
 <Router>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/home" element={<Home/>} />
  <Route path="/art" element={<ArtPage />} />
  <Route path="/welcome" element={<WelcomePage />} />
  <Route path="/about" element={<About />} />
 </Routes>
 </Router>

 </>
  )
}

export default App
