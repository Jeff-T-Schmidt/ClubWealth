import './style.css'
import luke from '../../assets/Luke.jpg'
import starwars from "../../APIs/starwars";

// const handleClick = (e) => {
    // e.preventDefault()
//     getLuke();
//     getC3po();
// }
    const getLuke = (e) => {
        e.preventDefault()
        starwars.getPeople()
        .then(response => {
            const info = response.map(obj => ({
                name: obj.name,
                height: obj.height,
                gender: obj.gender
            }))
        console.log(info[0])
        })
    }
    const getC3po = (e) => {
        e.preventDefault()
        starwars.getPeople()
        .then(response => {
            const info = response.map(obj => ({
                name: obj.name,
                height: obj.height,
                gender: obj.gender
            }))
            .then(obj.toString())
            console.log(info[1])
        })
    }
  


const StarWars = () => {


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
                            {/* <p><a href="#" onClick={getLuke}>More info</a></p> */}
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Luke Skywalker<i class="material-icons right">close</i></span>
                            <p>STAT SHEET
                                <br></br>
                                <p><a href="#" onClick={getLuke}>More info</a></p>
                            </p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={luke} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Luke Skywalker<i class="material-icons right">more_vert</i></span>
                            <p><a href="#" onClick={getC3po}>More info</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                    <div class="card col s4">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" style={{ height: '300px', width: '350px' }} src={luke} />
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={luke} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={luke} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                        <div class="card col s4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" style={{ height: '300px', width: '350px' }} src={luke} />
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                                <p><a href="#">This is a link</a></p>
                            </div>
                            <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default StarWars