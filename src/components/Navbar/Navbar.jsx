import React, {useState} from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logoP} alt='portugues logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#about'>Sobre nós</a>
        </li>
        <li className='p__opensans'>
          <a href='#menu'>Menu</a>
        </li>
        <li className='p__opensans'>
          <a href='#awards'>Prémios</a>
        </li>
        <li className='p__opensans'>
          <a href='#Contacto'>Contacto</a>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>
          Log In /Registro
        </a>
        <div />
        <a href='#home' className='p__opensans'>
          Reservas :
        </a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
        <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'>
              <a href='#home'>Home</a>
            </li>
            <li className='p__opensans'>
              <a href='#about'>Sobre nós</a>
            </li>
            <li className='p__opensans'>
              <a href='#menu'>Menu</a>
            </li>
            <li className='p__opensans'>
              <a href='#awards'>Prémios</a>
            </li>
            <li className='p__opensans'>
              <a href='#Contacto'>Contacto</a>
            </li>
        </ul>
          </div>
          )}
      </div>
    </div>
  );
};

export default Navbar;
