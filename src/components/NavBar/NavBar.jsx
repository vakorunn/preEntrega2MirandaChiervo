import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import TituloPrincipal from '../TituloPrincipal/TituloPrincipal'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <TituloPrincipal />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink className='link' to="/categoria/2"> Carnes </NavLink>
          </li>
          <li>
            <NavLink className='link' to="/categoria/1"> Cereales </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar