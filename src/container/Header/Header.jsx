import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='#home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Venha provar a nossa culinária' />
      <h1 className='app__header-h1'>Receitas 100 % Portuguesas</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        A culinária portuguesa tem características muito marcantes,
        principalmente porque tem forte influência da comida mediterrânea. Além
        disso, podemos dizer que a base da culinária do país é pão, vinho e
        azeite.
      </p>
      <button className='custom__button' type='button'>Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="polvo alagareiro" />
    </div>
  </div>
);

export default Header;
