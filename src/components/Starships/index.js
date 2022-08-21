import './style.css'
import starwars from "../../APIs/starwars";
import React, { useState, useEffect } from "react";
import xwing from '../../assets/starships/xwing.jpg'
import ywing from '../../assets/starships/ywing.jpg'
import cr90 from '../../assets/starships/cr90.jpg'
import millenium from '../../assets/starships/millenium.jpg'
import executor from '../../assets/starships/executor.jpg'
import stardestroyer from '../../assets/starships/stardestroyer.jpg'

const Starships = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        starwars.getStarships().then((response) => {
            const info = response.map(obj => ({
                name: obj.name,
                passengers: obj.passengers,
                length: obj.length,
                crew: obj.crew,
                manufacturer: obj.manufacturer,
                cargo_capacity: obj.cargo_capacity
            }))
           
            setData(response);
        });

    }, []);

    let name = data.map((item) => item.name)
    let passengers = data.map((item) => item.passengers)
    let length = data.map((item) => item.length)
    let crew = data.map((item) => item.crew)
    let manufacturer = data.map((item) => item.manufacturer)
    let cargo_capacity = data.map((item) => item.cargo_capacity)

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={xwing} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">X-Wing<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">X-Wing<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[6]}</li>
                                <li>Passengers: {passengers[6]}</li>
                                <li>Orbital period: {length[6]}</li>
                                <li>Crew : {crew[6]}</li>
                                <li>Manufacturer: {manufacturer[6]}</li>
                                <li>Cargo capacity: {cargo_capacity[6]} units</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={ywing} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Y-Wing<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Y-Wing<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[5]}</li>
                                <li>Passengers: {passengers[5]}</li>
                                <li>Orbital period: {length[5]}</li>
                                <li>Crew : {crew[5]}</li>
                                <li>Manufacturer: {manufacturer[5]}</li>
                                <li>Cargo capacity: {cargo_capacity[5]} units</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={cr90} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">CR-90<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">CR-90<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[0]}</li>
                                <li>Passengers: {passengers[0]}</li>
                                <li>Orbital period: {length[0]}</li>
                                <li>Crew : {crew[0]}</li>
                                <li>Manufacturer: {manufacturer[0]}</li>
                                <li>Cargo capacity: {cargo_capacity[0]} units</li>
                            </p>
                        </div>
                    </div>

                    <div className='row'>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '400px' }} src={millenium} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Millenium Falcon<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Millenium Falcon<i class="material-icons right">close</i></span>
                                <p>STAT SHEET
                                    <br></br>
                                    <li>Name: {name[4]}</li>
                                    <li>Passengers: {passengers[4]}</li>
                                    <li>Orbital period: {length[4]}</li>
                                    <li>Crew : {crew[4]}</li>
                                    <li>Manufacturer: {manufacturer[4]}</li>
                                    <li>Cargo capacity: {cargo_capacity[4]} units</li>
                                </p>
                            </div>
                        </div>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={executor} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Executor<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Executor<i class="material-icons right">close</i></span>
                                <p>STAT SHEET
                                    <br></br>
                                    <li>Name: {name[8]}</li>
                                    <li>Passengers: {passengers[8]}</li>
                                    <li>Orbital period: {length[8]}</li>
                                    <li>Crew : {crew[8]}</li>
                                    <li>Manufacturer: {manufacturer[8]}</li>
                                    <li>Cargo capacity: {cargo_capacity[8]} units</li>
                                </p>
                            </div>
                        </div>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={stardestroyer} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Star Destroyer<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Star Destroyer<i class="material-icons right">close</i></span>
                                <p>STAT SHEET
                                    <br></br>
                                    <li>Name: {name[1]}</li>
                                    <li>Passengers: {passengers[1]}</li>
                                    <li>Orbital period: {length[1]}</li>
                                    <li>Crew : {crew[1]}</li>
                                    <li>Manufacturer: {manufacturer[1]}</li>
                                    <li>Cargo capacity: {cargo_capacity[1]} units</li>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

    export default Starships