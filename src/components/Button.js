import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Button.css';

class Button extends Component {
    static propTypes = {
        to: PropTypes.string,
        value: PropTypes.string
    };

    render() {
        const { to, value='Выбрать' } = this.props;
        return (
            <Link to={to} className="Button">{value}</Link>
        );
    }
}

export default Button;
