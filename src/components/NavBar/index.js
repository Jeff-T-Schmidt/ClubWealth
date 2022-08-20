import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi, faCat, faBiohazard } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <>
            <nav className='nav-bar'>
                <ul>
                    <li className='active'>
                        <Link exact='true' to='/starwars'>
                            <div >
                                <button className='starWars-btn active'>
                                    <FontAwesomeIcon icon={faJedi} color="#4d4d4e" />
                                    Star Wars
                                </button>
                            </div>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link exact='true' className='cat-link' to='/cats'>
                            <div >
                                <button className='cat-btn active'>
                                    <FontAwesomeIcon icon={faCat} color="#4d4d4e" />
                                    Cats
                                </button>
                            </div>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link exact='true' className='covid-link' to='/covid'>
                            <div >
                                <button className='covid-btn active'>
                                    <FontAwesomeIcon icon={faBiohazard} color="#4d4d4e" />
                                    Covid
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