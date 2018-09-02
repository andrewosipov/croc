import React, {Component} from 'react';
import Filter from './Filter';
import Button from './Button';
import PropTypes from 'prop-types';

class Step1 extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Filter />
                <div className="item-list">

                </div>
                <div className="buttons">
                    <Button />
                </div>
            </div>
        );
    }
}

export default Step1;
