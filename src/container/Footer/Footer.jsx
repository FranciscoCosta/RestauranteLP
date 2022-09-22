import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="Contacto">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contatos</h1>
        <p className="p__opensans">Belo Horizonte , Minas Gerais</p>
        <p className="p__opensans">+31 111111111</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logoP} alt="footer_logo" />
        <p className="p__opensans">&quot;A melhor comida portuguesa no Brasil.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horário</h1>
        <p className="p__opensans">Segunda a sexta:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sábado e Domingo:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Francisco Costa. Todos os direitos Reservados</p>
    </div>

  </div>
);

export default Footer;