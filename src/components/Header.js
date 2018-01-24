import React from 'react';
import { NavLink, Link } from 'react-router-dom';

//(606)-275-2369

export const Header = ({ startLogout }) => (
  <header className="header">
      <div className="header__left">
        <div className="header__phone">
          <p>(606)-275-2369</p>
        </div>
      </div>
      <div className="header__right">
        <div className="header__call">
          <p><a id="phone-number" href="+6062752369"><i className="fa fa-phone"></i>&nbsp;CALL</a></p>
        </div>
      </div>
  </header>
);



export default Header;
