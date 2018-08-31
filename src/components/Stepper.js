import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

class Stepper extends Component {
    static propTypes = {};

    render() {
        return (
            <ul className="stepper">
               <li><NavLink to="/step1" activeClassName="active">1. Образ диска</NavLink></li>
                <li><NavLink to="/step2" activeClassName="active">2. Параметры</NavLink></li>
            </ul>
        );
    }
}

export default Stepper;
