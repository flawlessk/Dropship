import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faListUl,
  faCube,
  faCheckSquare,
  faArrowsAltH,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/" id="dropship_logo">
          <img
            className="logo_img"
            src="/assets/dropship_logo.png"
            alt="logo"
          ></img>
        </a>
      </div>
      <div className="drop-down">
        <ul className="nav_list">
          <div className="list_box-profile">
            <li className="list-item">
              <Link to="/user/profile">
                <img
                  className="item-img"
                  id="list-item--profile"
                  src="/assets/profile.jpg"
                  alt="profile"
                />
              </Link>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--dashboard">
              <Link to="/dashboard">
                <FontAwesomeIcon className="icons" icon={faTachometerAlt} />
              </Link>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--catalog">
              <Link to="/catalog">
                <FontAwesomeIcon className="icons" icon={faListUl} />
              </Link>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--inventory">
              <Link to="/cart">
                <FontAwesomeIcon className="icons" icon={faCube} />
              </Link>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--orders">
              <Link to="/orders">
                <FontAwesomeIcon className="icons" icon={faCheckSquare} />
              </Link>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--transactions">
              <Link to="/transactions">
                <FontAwesomeIcon className="icons" icon={faArrowsAltH} />
              </Link>
            </li>
          </div>
          <div className="list_box">
            <li className="list-item" id="list-item--store">
              <Link to="/store">
                <FontAwesomeIcon className="icons" icon={faClipboardList} />
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
