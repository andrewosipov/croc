import React, {Component} from 'react';
import Stepper from './Stepper';
import Filter from './Filter';
import Button from './Button';
import PropTypes from 'prop-types';

import '../styles/Step.css';

class Step1 extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Stepper activeStep={1} />
                <div className="Step Step--one">
                    <Filter />
                    <div className="item-list">

                    </div>
                    <div className="Button-container">
                        <Button to="/step2" value="Выбрать" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Step1;
