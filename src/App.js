import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Cats from './components/Cats';
import StarWars from './components/StarWars';
import Covid from './components/Covid';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/starwars" element={<StarWars />} />
                    <Route path="/cats" element={<Cats />} />
                    <Route path="/covid" element={<Covid />} />       
            </Routes>
        </>
    )
}
export default App