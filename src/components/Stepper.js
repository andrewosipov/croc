import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/Stepper.css';

class Stepper extends Component {
    static propTypes = {};

    render() {
        return (
            <ul className="Stepper">
              <li className="Stepper__list-item"><NavLink to="/step1" className="Stepper__link" activeClassName="Stepper__link--active">1. Образ диска</NavLink></li>
              <li className="Stepper__list-item"><NavLink to="/step2" className="Stepper__link" activeClassName="Stepper__link--active">2. Параметры</NavLink></li>
            </ul>
        );
    }
}

export default Stepper;
