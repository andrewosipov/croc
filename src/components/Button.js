import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Button.css';

class Button extends Component {
    static propTypes = {
        to: PropTypes.string,
        value: PropTypes.string,
        onClick: PropTypes.func
    };

    render() {
        const { to, value='Выбрать', onClick = () => null } = this.props;
        return (
            <Link to={to} className="Button" onClick={onClick}>{value}</Link>
        );
    }
}

export default Button;
