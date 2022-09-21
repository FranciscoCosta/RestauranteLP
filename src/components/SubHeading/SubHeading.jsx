import React from 'react';


import { images } from '../../constants';
const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__poppins'>{title}</p>
    <img src={images.spoon} alt="colher" className='spoon__img'/>
  </div>
);

export default SubHeading;
