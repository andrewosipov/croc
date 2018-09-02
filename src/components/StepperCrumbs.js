import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/StepperCrumbs.css';

class StepperCrumbs extends Component {
    static propTypes = {
        activeStep: PropTypes.number
    };

    render() {
        const {activeStep} = this.props;
        const activeClassName = 'Stepper-crumbs__item--active';
        const isActiveStep1 = activeStep === 1 ? activeClassName : '';
        const isActiveStep2 = activeStep === 2 ? activeClassName : '';

        return (
            <ul className="Stepper-crumbs">
              <li className={`Stepper-crumbs__item ${isActiveStep1}`}>1. Образ диска</li>
              <li className={`Stepper-crumbs__item ${isActiveStep2}`}>2. Параметры</li>
            </ul>
        );
    }
}

export default StepperCrumbs;