import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import NotFound from "../components/NotFound";
import PropTypes from 'prop-types';

class Stepper extends Component {
    static propTypes = {};

    render() {
        return (
            <Switch>
                <Route path = '/step1' component={Step1} />
                <Route path = '/step2' component={Step2} />
                <Redirect from = "/" to = "/step1" />
                <Route path = "*"  component = {NotFound} />
            </Switch>
        );
    }
}

export default Stepper;
