import './style.css'
import starwars from "../../APIs/starwars";
import React, { useState, useEffect } from "react";
import tatooine from '../../assets/planets/Tatooine.jpg'
import alderaan from '../../assets/planets/Alderaan.jpg'
import hoth from '../../assets/planets/Hoth.jpg'
import dagobah from '../../assets/planets/Dagobah.jpg'
import naboo from '../../assets/planets/Naboo.jpg'
import endor from '../../assets/planets/Endor.jpg'


const Planets = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        starwars.getPlanets().then((response) => {
            const info = response.map(obj => ({
                name: obj.name,
                climate: obj.climate,
                orbital_period: obj.orbital_period,
                population: obj.population,
                rotation_period: obj.rotation_period,
                terrain: obj.terrain
            }))
            
            setData(response);
        });

    }, []);

    let name = data.map((item) => item.name)
    let climate = data.map((item) => item.climate)
    let orbital_period = data.map((item) => item.orbital_period)
    let population = data.map((item) => item.population)
    let rotation_period = data.map((item) => item.rotation_period)
    let terrain = data.map((item) => item.terrain)

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={tatooine} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Tatooine<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Tatooine<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[0]}</li>
                                <li>Climate: {climate[0]}</li>
                                <li>Orbital period: {orbital_period[0]}</li>
                                <li>Population : {population[0]}</li>
                                <li>Ration period: {rotation_period[0]}</li>
                                <li>Terrain: {terrain[0]}</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={hoth} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Hoth<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Hoth<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[3]}</li>
                                <li>Climate: {climate[3]}</li>
                                <li>Orbital period: {orbital_period[3]}</li>
                                <li>Population : {population[3]}</li>
                                <li>Ration period: {rotation_period[3]}</li>
                                <li>Terrain: {terrain[3]}</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={endor} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Endor<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Endor<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[6]}</li>
                                <li>Climate: {climate[6]}</li>
                                <li>Orbital period: {orbital_period[6]}</li>
                                <li>Population : {population[6]}</li>
                                <li>Ration period: {rotation_period[6]}</li>
                                <li>Terrain: {terrain[6]}</li>
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '400px' }} src={naboo} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Naboo<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Naboo<i class="material-icons right">close</i></span>
                                <p>STAT SHEET
                                    <br></br>
                                    <li>Name: {name[7]}</li>
                                    <li>Climate: {climate[7]}</li>
                                    <li>Orbital period: {orbital_period[7]}</li>
                                    <li>Population : {population[7]}</li>
                                    <li>Ration period: {rotation_period[7]}</li>
                                    <li>Terrain: {terrain[7]}</li>
                                </p>
                            </div>
                        </div>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={dagobah} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Dagobah<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Dagobah<i class="material-icons right">close</i></span>
                                <p>STAT SHEET
                                    <br></br>
                                    <li>Name: {name[4]}</li>
                                    <li>Climate: {climate[4]}</li>
                                    <li>Orbital period: {orbital_period[4]}</li>
                                    <li>Population : {population[4]}</li>
                                    <li>Ration period: {rotation_period[4]}</li>
                                    <li>Terrain: {terrain[4]}</li>
                                </p>
                            </div>
                        </div>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={alderaan} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Alderaan<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Alderaan<i class="material-icons right">close</i></span>
                                <p>STAT SHEET
                                    <br></br>
                                    <li>Name: {name[1]}</li>
                                    <li>Climate: {climate[1]}</li>
                                    <li>Orbital period: {orbital_period[1]}</li>
                                    <li>Population : {population[1]} (Really should be zero!)</li>
                                    <li>Ration period: {rotation_period[1]}</li>
                                    <li>Terrain: {terrain[1]}</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default Planets