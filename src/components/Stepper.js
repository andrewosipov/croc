import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/Stepper.css';

class Stepper extends Component {
    static propTypes = {
        activeStep: PropTypes.number
    };

    render() {
        const {activeStep} = this.props;
        const activeClassName = 'Stepper__item--active';
        const isActiveStep1 = activeStep === 1 ? activeClassName : '';
        const isActiveStep2 = activeStep === 2 ? activeClassName : '';

        return (
            <ul className="Stepper">
              <li className={`Stepper__item ${isActiveStep1}`}>1. Образ диска</li>
              <li className={`Stepper__item ${isActiveStep2}`}>2. Параметры</li>
            </ul>
        );
    }
}

export default Stepper;