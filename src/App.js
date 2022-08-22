import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Starships from './components/Starships';
import Characters from './components/Characters';
import Planets from './components/Planets';
import NavBar from './components/NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/starwars" element={<Characters />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/planets" element={<Planets />} />       
            </Routes>
        </>
    )
}
export default App