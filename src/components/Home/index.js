import './style.css'
import people from '../../assets/people.jpg'
import planet from '../../assets/planet.jpg'
import starship from '../../assets/starship.jpg'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='left-pic col s4'>
                    <Link  exact='true' to='/starwars'><img class='image1' src={people} /></Link>
                    </div>
                    <div className='center-pic col s4'>
                    <Link exact='true' to='/starships'><img class='image2' src={starship} /></Link>   
                    </div>
                    <div className='right-pic col s4'>
                    <Link exact='true' to='/planets'><img class='image3' src={planet} /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home