import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/Stepper.css';

class Stepper extends Component {
    static propTypes = {
        activeStep: PropTypes.number
    };

    render() {
        const {activeStep} = this.props;
        return (
            <ul className="Stepper">
              <li className="Stepper__list-item">1. Образ диска</li>
              <li className="Stepper__list-item">2. Параметры</li>
            </ul>
        );
    }
}

export default Stepper;
