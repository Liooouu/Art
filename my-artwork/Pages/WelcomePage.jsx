import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-indigo-400 to-sky-500 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-xl md:text-2xl font-semibold text-white mb-4">
          I dedicate this form of Art to Jesus, my Lord and Savior
        </h1>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            To God be the highest glory!
          </h2>
          <Link
            to="/art"
            className="bg-slate-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to My Art
          </Link>
        </div>
      </div>
    </>
  );
};
