import React, {Component} from 'react';
import StepperCrumbs from './StepperCrumbs';
import FieldList from '../containers/FieldList';
import Button from "./Button";

import '../styles/Step.css';

class Step2 extends Component {
    static propTypes = {};

    createButtonHandler = (ev) => {
        const {createVirtualMachine} = this.props;
        //ev.preventDefault();
        createVirtualMachine();
    };

    render() {
        return (
            <div>
                <StepperCrumbs activeStep={2} />
                <div className="Step Step--two">
                    <FieldList />
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
