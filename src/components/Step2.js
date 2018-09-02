import React, {Component} from 'react';
import Stepper from './Stepper';
import Button from "./Button";

import '../styles/Step.css';

class Step2 extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Stepper activeStep={2} />
                <div className="Step Step--two">
                    <div className="form">

                    </div>
                    <div className="Button-container">
                        <Button to="/step1" value="Назад" />
                        <Button to="/create" value="Создать" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Step2;
