import React from 'react';
import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  return (
    <nav className="catalog__nav dd-wrapper">
      <div className="catalog__nav-form">
        <div className="form-text dd-category" role="button">
          Choose Category
          <span className="sortdown-first">
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
        <div className="form-text-category">
          Choose Niche
          <span className="sortdown-second">
            <FontAwesomeIcon icon={faSortDown} />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Dropdown;
