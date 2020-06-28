import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Navbar1 = ({ icon, title }) => {

    // const title = 'Github Finder';

    return (

        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );

};

Navbar1.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github',
};

Navbar1.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar1;
