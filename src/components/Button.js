import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/Button.css';

class Button extends Component {
    static propTypes = {};

    render() {
        return (
            <button className="Button">Выбрать</button>
        );
    }
}

export default Button;
