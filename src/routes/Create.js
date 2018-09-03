import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

class Create extends Component {
    render() {
        return (
            <Redirect from = "/create" to = "/success" />
        );
    }
}

export default Create;
