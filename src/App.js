import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar.jsx';
import Home from './page/Home/Home.jsx';
import Profile from './page/Profile/Profile.jsx';
import About from './component/About/About.jsx';
import ProfileDetail from './component/ProfileDetail/ProfileDetail.jsx';
import ConnectDetail from './component/ConnectDetail/ConnectDetail.jsx';
import ProfilePage from './component/ProfilePage/ProfilePage.jsx';
import LeaderBoard from './page/LeaderBoard/LeaderBoard.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />}></Route>
                    <Route path="profile/:name" element={<Profile />}>
                        <Route index element={<ProfileDetail />}></Route>
                        <Route path="about" element={<About />}></Route>
                        <Route path="connection" element={<ConnectDetail />}></Route>
                        <Route path="page" element={<ProfilePage />}></Route>
                    </Route>
                    <Route path="leader-board" element={<LeaderBoard />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
