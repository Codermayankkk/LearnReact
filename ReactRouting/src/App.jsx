import { BrowserRouter, Route, Routes } from 'react-router';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './navbar';
import Setting from './Setting';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/setting" element={<Setting/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
