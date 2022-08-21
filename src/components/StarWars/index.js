import './style.css'
import luke from '../../assets/people/Luke.jpg'
import c3po from '../../assets/people/c3po.png'
import obi from '../../assets/people/Obi.jpg'
import darth from '../../assets/people/Darth.jpg'
import leia from '../../assets/people/Leia.jpg'
import r2d2 from '../../assets/people/R2-D2.jpg'

import starwars from "../../APIs/starwars";
import React, { useState, useEffect } from "react";


const StarWars = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        starwars.getPeople().then((response) => {
            const info = response.map(obj => ({
                name: obj.name,
                height: obj.height,
                gender: obj.gender,
                mass: obj.mass,
                eye_color: obj.eye_color,
                hair_color: obj.hair_color
            }))
            console.log("response", response);
            setData(info);
        });

    }, []);

    let name = data.map((item) => item.name)
    let gender = data.map((item) => item.gender)
    let height = data.map((item) => item.height)
    let mass = data.map((item) => item.mass)
    let eye_color = data.map((item) => item.eye_color)
    let hair_color = data.map((item) => item.hair_color)

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={luke} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Luke Skywalker<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Luke Skywalker<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[0]}</li>
                                <li>Gender: {gender[0]}</li>
                                <li>Eye Color: {eye_color[0]}</li>
                                <li>Hair Color : {hair_color[0]}</li>
                                <li>Height: {height[0]}</li>
                                <li>Mass: {mass[0]} units</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '500px' }} src={obi} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Obi-wan Kenobi<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Obi-wan Kenobi<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[9]}</li>
                                <li>Gender: {gender[9]}</li>
                                <li>Eye Color: {eye_color[9]}</li>
                                <li>Hair Color : {hair_color[9]}</li>
                                <li>Height: {height[9]}</li>
                                <li>Mass: {mass[9]} units</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={leia} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Leia Skywalker<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Leia Skywalker<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[4]}</li>
                                <li>Gender: {gender[4]}</li>
                                <li>Eye Color: {eye_color[4]}</li>
                                <li>Hair Color : {hair_color[4]}</li>
                                <li>Height: {height[4]}</li>
                                <li>Mass: {mass[4]} units</li>
                            </p>
                        </div>
                    </div>
                    
                    <div className='row'>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '500px' }} src={darth} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Darth Vader<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Darth Vader<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[3]}</li>
                                <li>Gender: {gender[3]}</li>
                                <li>Eye Color: {eye_color[3]}</li>
                                <li>Hair Color : {hair_color[3]}</li>
                                <li>Height: {height[3]}</li>
                                <li>Mass: {mass[3]} units</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={c3po} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">C3PO<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">C3PO<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[1]}</li>
                                <li>Gender: Droid</li>
                                <li>Eye Color: {eye_color[1]}</li>
                                <li>Hair Color : Doesn't have hair</li>
                                <li>Height: {height[1]}</li>
                                <li>Mass: {mass[1]} units</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={r2d2} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">R2-D2<i class="material-icons right">more_vert</i></span>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">R2-D2<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <li>Name: {name[2]}</li>
                                <li>Gender: Droid</li>
                                <li>Eye Color: {eye_color[2]}</li>
                                <li>Hair Color :  Doesn't have hair</li>
                                <li>Height: {height[2]}</li>
                                <li>Mass: {mass[2]} units</li>
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default StarWars