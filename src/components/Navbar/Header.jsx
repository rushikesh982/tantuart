import React from 'react'
import './Header.css';
import Logo from '../Assets/footerLogo.webp'

const Header = () => {
  return (
    <>
        <div className="navOuter">
            <div className="navLogo">
                <img src={Logo} alt="nav_logo" height={'30px'} />
            </div>
            <div className="navItem">
                <ul>
                    <li>SHOP</li>
                    <li>WORKSHOP</li>
                    <li>INTERIORS PROJECT</li>
                    <li>CONTACT</li>
                    <li>OUR STORY</li>
                </ul>
            </div>
            <div className="navRight">
                <ul>
                    <li>
                        <i class="ri-account-circle-fill"></i>
                    </li>
                    <li>
                        <i class="ri-search-line"></i>
                    </li>
                    <li>
                        <i class="ri-shopping-cart-2-line"></i>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header