import './style.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className='nav-bar'>
                <div className='site-title'>
                    <Link exact='true' to='/'>
                    <h2>Star Wars Fact Sheets</h2>
                    </Link>
                </div>
                <ul>
                    <li className='active'>
                        <Link exact='true' to='/starwars'>
                            <div >
                                <button className='starWars-btn active'>

                                    People of Star Wars
                                </button>
                            </div>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link exact='true' className='starships-link' to='/starships'>
                            <div >
                                <button className='starships-btn active'>

                                    Starships of Star Wars
                                </button>
                            </div>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link exact='true' className='planets-link' to='/planets'>
                            <div >
                                <button className='planets-btn active'>

                                    Planets of Star Wars
                                </button>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}
export default NavBar