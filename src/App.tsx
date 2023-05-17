import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="relative">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
