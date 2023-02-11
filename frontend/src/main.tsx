import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/profile/Profile';
// import { UserContextProvider } from './context/userContext';
import './main.css';
import HomePage from './pages/HomePage';
import Leaderboard from './pages/Leaderboard';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <UserContextProvider> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                </Routes>
            </BrowserRouter>
        {/* </UserContextProvider> */}
    </React.StrictMode>,
);
