import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./functionBased/components/TodoContainer"
import Navbar from "./functionBased/components/Navbar"
import About from "./pages/About"
import NotMatch from "./pages/NotMatch"
import "./functionBased/App.css"

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Navbar />}>
            <Route index element={<TodoContainer />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);