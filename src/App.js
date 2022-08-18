import { Route, Routes, Switch } from 'react-router-dom';
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
                <Route path="/" element={<Home />}>
                    <Route exact path="starwars" element={<StarWars />} />
                    <Route exact path="cats" element={<Cats />} />
                    <Route exact path="covid" element={<Covid />} />
                </Route>
            </Routes>
        </>
    )
}
export default App