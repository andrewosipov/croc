import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
    static propTypes = {};

    render() {
        const {label, value} = this.props;
        return (
            <div className="FieldItem">
                <div className="FieldItem__label">{label}</div>
                <div className="FieldItem__value">{value}</div>
            </div>
        );
    }
}

export default Field;
