import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Step1 extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <div className="filter"></div>
                <div className="item-list"></div>
                <div className="buttons"></div>
            </div>
        );
    }
}

export default Step1;
