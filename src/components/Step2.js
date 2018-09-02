import React, {Component} from 'react';
import StepperCrumbs from './StepperCrumbs';
import FieldList from './FieldList';
import Button from "./Button";

import '../styles/Step.css';

class Step2 extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <StepperCrumbs activeStep={2} />
                <div className="Step Step--two">
                    <FieldList />
                </div>
                <div className="Button-container">
                    <Button to="/step1" value="Назад" />
                    <Button to="/create" value="Создать" />
                </div>
            </div>
        );
    }
}

export default Step2;
