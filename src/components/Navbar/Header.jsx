import React from 'react'
import './Header.css';
import Logo from '../Assets/footerLogo.webp'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <div className="navOuter">
            <div className="navLogo">
                <NavLink className={'nav-link'} to={'/'}><img src={Logo} alt="nav_logo" height={'30px'} /></NavLink>
            </div>
            <div className="navItem">
                <ul>
                    <li><NavLink className={'nav-link'} to={'/'}>SHOP</NavLink></li>
                    <li><NavLink className={'nav-link'} to={'/workshop'}>WORKSHOP</NavLink></li>
                    <li><NavLink className={'nav-link'} to={'/interiorProjects'}>INTERIORS PROJECT</NavLink></li>
                    <li><NavLink className={'nav-link'} to={'/contact'}>CONTACT</NavLink></li>
                    <li><NavLink className={'nav-link'} to={'/ourStory'}>OUR STORY</NavLink></li>
                </ul>
            </div>
            <div className="navRight">
                <ul>
                    <li>
                        <i class="ri-account-circle-fill login"></i>
                    </li>
                    <li>
                        <i class="ri-search-line"></i>
                    </li>
                    <li>
                        <i class="ri-shopping-cart-2-line"></i>
                    </li>
                    <li><i class="ri-menu-line"></i></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header