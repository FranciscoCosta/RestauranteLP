import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__poppins'>Sobre nós</h1>
        <img src={images.spoon} alt='colher' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vulputate tristique arcu, eget cursus lectus gravida a. Cras pharetra
          libero ex, vitae vestibulum lacus pretium vitae. Aenean blandit risus
          quis fermentum rutrum. Aliquam sed commodo sem. Pellentesque nec diam
          in tellus consectetur aliquet vitae quis turpis. Duis cursus nibh a.
        </p>
        <button type='button' className='custom__button'>Saiba mais</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__poppins'>A nossa história</h1>
        <img src={images.spoon} alt='colher' className='spoon__img' />
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          vulputate tristique arcu, eget cursus lectus gravida a. Cras pharetra
          libero ex, vitae vestibulum lacus pretium vitae. Aenean blandit risus
          quis fermentum rutrum. Aliquam sed commodo sem. Pellentesque nec diam
          in tellus consectetur aliquet vitae quis turpis. Duis cursus nibh a.
        </p>
        <button type='button' className='custom__button'>Saiba mais</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
