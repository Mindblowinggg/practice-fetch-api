import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Users from "./Users";
import About from "./About";

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex-none">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
