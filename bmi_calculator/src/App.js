import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Input from "./components/Input";
import Result from "./components/Result";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route index element={<Home />} />
    <Route path="/width" element={<Input/>}/>
    <Route path="/height" element={<Input/>}/>
    <Route path="/result" element={<Result />}/>   
    </Routes>
  </BrowserRouter>
  );
}

export default App;
