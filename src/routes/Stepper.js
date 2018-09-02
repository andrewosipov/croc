import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";

class Stepper extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/step1' component={Step1} />
                <Route path = '/step2' component={Step2} />
                <Redirect from = "/" to = "/step1" />
            </Switch>
        );
    }
}

export default Stepper;
