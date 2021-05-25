import { NavLink } from 'react-router-dom'

import './Header.sass'

const Header = () => {
   return (
      <header className="Header">
         <div className="container">
            <span className="Header__nav-item">
               <NavLink exact to="/" activeClassName="active">Issues</NavLink>
            </span>
            <span className="Header__nav-item">
               <NavLink exact to="/logs" activeClassName="active">Logs</NavLink>
            </span>
         </div>
      </header>
   )
}

export default Header
