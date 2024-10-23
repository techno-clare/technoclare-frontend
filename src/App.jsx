import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from "./components/Common/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-richblack-10">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
