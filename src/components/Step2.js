import React, {Component} from 'react';
import StepperCrumbs from './StepperCrumbs';
import FieldList from '../containers/FieldList';
import Button from "./Button";
import {isNumeric} from '../helpers';

import '../styles/Step.css';

class Step2 extends Component {
    static propTypes = {};

    state = {
        nameValid: true,
        sizeValid: true
    };

    validate() {
        const {virtualMachine} = this.props;
        let result = true;
        const newState = {...this.state};
        if ( !virtualMachine.name ) {
            result = false;
            newState.nameValid = false;
        }
        if ( !isNumeric(virtualMachine.size) && virtualMachine.size < 1 ) {
            result = false;
            newState.sizeValid = false;
        }

        return {
            result,
            newState
        };
    };

    createButtonHandler = (ev) => {
        const {createVirtualMachine} = this.props;
        const validateForm = this.validate();
        if( validateForm.result ) {
            createVirtualMachine();
        } else {
            ev.preventDefault();
            this.setState( validateForm.newState )
        }
    };

    render() {
        return (
            <div>
                <StepperCrumbs activeStep={2} />
                <div className="Step Step--two">
                    <FieldList status={ {...this.state} }  />
                </div>
                <div className="Button-container">
                    <Button to="/step1" value="Назад" />
                    <Button to="/create" value="Создать" onClick={this.createButtonHandler} />
                </div>
            </div>
        );
    }
}

export default Step2;
