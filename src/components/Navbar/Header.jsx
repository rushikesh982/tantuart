import React, { useState } from 'react'
import './Header.css';
import Logo from '../Assets/footerLogo.webp'
import { NavLink } from 'react-router-dom';

const Header = () => {
    let [changeColor,setChangeColor] = useState();
  return (
    <>
        <div className="navOuter">
            <div className="navLogo">
                <NavLink className={'nav-link'} to={'/'}><img src={Logo} alt="nav_logo" height={'30px'} /></NavLink>
            </div>
            <div className="navItem">
                <ul>
                    <li>
                        <NavLink onClick={
                            ()=>{setChangeColor('shop')}
                            } className={
                                ` ${changeColor == 'shop'?"activeColor":'dactiveColor'}`
                                } to={'/'}>SHOP

                                </NavLink>
                                </li>
                    <li>
                        <NavLink onClick={
                            ()=>{setChangeColor('workshop')}
                            } className={
                                ` ${changeColor == 'workshop'?'activeColor':'dactiveColor'}`
                                } to={'/workshop'}>WORKSHOP</NavLink>
                                </li>
                    <li><NavLink onClick={()=>{setChangeColor('interiorPorject')}} className={` ${changeColor == 'interiorPorject'?'activeColor':"dactiveColor"}`} to={'/interiorProjects'}>INTERIORS PROJECT</NavLink></li>
                    <li><NavLink onClick={()=>{setChangeColor('contact')}} className={`${changeColor == 'contact'?'activeColor':'dactiveColor'}`} to={'/contact'}>CONTACT</NavLink></li>
                    <li><NavLink onClick={()=>{setChangeColor('ourStory')}} className={changeColor == 'ourStory'?'activeColor':'dactiveColor'} to={'/ourStory'}>OUR STORY</NavLink></li>
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
                    <li><i class="ri-menu-line menu"></i></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header