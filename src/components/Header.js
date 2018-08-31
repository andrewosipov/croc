import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';

const Header = props => {
    return (
        <header className="header">
            <h1 className="header__title">Создание виртуальной машины</h1>
        </header>
    );
};

Header.propTypes = {

};

export default Header;
