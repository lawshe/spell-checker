import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import glob from 'style';

class Nav extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }

  constructor () {
    super();
    this.state = {
      isHovering: false
    };
  }

  render() {

    const linkAccessibility = (
      <li>
        <NavLink to="/accessibility" activeClassName={glob.active}>
          <i className="fa fa-universal-access" aria-hidden="true"></i> <b>Accessibility</b>
        </NavLink>
      </li>
    );
    return (
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <div className="container">
            <Link to="/">
                <span id="logo-container" className={`brand-logo ${glob.brand_logo}`}>
                  <img src="/public/images/icons/icon-w.png" alt="Spell Checker" />
                </span>
            </Link>
          </div>

          <ul className={`menu-list right hide-on-med-and-down ${glob.dark_bg}`}>
            {linkAccessibility}
          </ul>

          <ul id="nav-mobile" className={`side-nav ${glob.side_nav}`}>
            {linkAccessibility}
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    )
  }
}

export { Nav as default}
