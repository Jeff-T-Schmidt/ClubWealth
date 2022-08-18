import './style.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJedi, faCat, faBiohazard } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <>
            <div className='nav-bar'>
                <nav>
                    <Link exact='true' activeclassname='active' to='/starwars'>
                        <div className='starWars-btn'>
                            <button >
                                <FontAwesomeIcon icon={faJedi} color="#4d4d4e" />
                                Star Wars
                            </button>
                        </div>
                    </Link>
                    <Link exact='true' activeclassname='active' className='cat-link' to='/cats'>
                        <div className='cat-btn'>
                            <button>
                                <FontAwesomeIcon icon={faCat} color="#4d4d4e" />
                                Cats
                            </button>
                        </div>
                    </Link>
                    <Link exact='true' activeclassname='active' className='covid-link' to='/covid'>
                        <div className='covid-btn'>
                            <button>
                                <FontAwesomeIcon icon={faBiohazard} color="#4d4d4e" />
                                Covid
                            </button>
                        </div>
                    </Link>
                </nav>
            </div>

        </>
    )
}
export default NavBar