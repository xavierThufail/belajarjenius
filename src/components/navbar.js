import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import home from '../assets/home-solid.svg';
import bullhorn from '../assets/bullhorn-solid.svg';
import listings from '../assets/list-alt-solid.svg';
import clients from '../assets/user-friends-solid.svg';
import settings from '../assets/cog-solid.svg';

export default function Navbar () {

  return (
    <nav id="nav" style={{position: 'absolute'}}>
      <ul style={{listStyle: 'none'}}>
        <li>
          <Link to='/'>
            <img alt="" src={home} style={{height: '60px', width: '60px', marginBottom: '50px', marginLeft: '10px'}} />
          </Link>
        </li>
        <li>
          <NavLink exact className="app-link" activeClassName="app-link active"  to='/' active>
            <img alt="" src={home} className="app-icon"/>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="app-link" activeClassName="app-link active" to='/files'>
            <img alt="" src={bullhorn} className="app-icon" />
            <span>Campaign</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="app-link" activeClassName="app-link active" to='/listings'>
            <img alt="" src={listings} className="app-icon" />
            <span>Listings</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="app-link" activeClassName="app-link active" to='/clients'>
            <img alt="" src={clients} className="app-icon" />
            <span>Branch</span>
          </NavLink>
        </li>
        <li>
          <NavLink className="app-link" activeClassName="app-link active" to='/settings'>
            <img alt="" src={settings} className="app-icon" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}