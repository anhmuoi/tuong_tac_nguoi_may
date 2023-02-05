import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './page/Home/Home.jsx';

function App() {
    return (
        <BrowserRouter>
            {/* <motion.div
        className="cursor"
        variants={variants as any}
        animate={cursorVariant}
      /> */}
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />}></Route>
                    {/* <Route path="about" element={<About />}></Route>
                    <Route path="contact" element={<Contact />}></Route>
                    <Route path="artist/*" element={<Artist />}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
