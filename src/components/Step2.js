import React, {Component} from 'react';
import Button from "./Button";

import '../styles/Step.css';

class Step2 extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="Step Step--two">
                <div className="form"></div>
                <div className="Button-container">
                    <Button  />
                    <Button  />
                </div>
            </div>
        );
    }
}

export default Step2;
