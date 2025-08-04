import { ArtPage } from "../Pages/ArtPage"
import { Navbar } from "../Components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Link } from "react-router-dom";
import { WelcomePage } from "../Pages/WelcomePage";


export const Home = () => {
  return (
    <>
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">GEARTS+ - Art Appreciation</h1>
        <Link
          to="/welcome"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Start
        </Link>
      </div>
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
 </Routes>
 </Router>

 </>
  )
}

export default App
