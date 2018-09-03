import React, {Component} from 'react';
import {getBool} from '../helpers';
import PropTypes from 'prop-types';

class Field extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]).isRequired,
        type: PropTypes.string.isRequired,
        onChange: PropTypes.func
    };

    render() {
        const {
            label = 'Label',
            value = 'Value',
            type = 'label',
            onChange = () => null
        } = this.props;

        let valueItem = null;
        switch (type) {
            case 'label': valueItem = value; break;
            case 'text': valueItem = <input type="text" value={value} onChange={onChange} />; break;
            case 'bool': valueItem = <input type="checkbox" defaultChecked={getBool(value)} />; break;
            default: valueItem = value;
        }

        return (
            <div className="FieldItem">
                <div className="FieldItem__label">{label}</div>
                <div className="FieldItem__value">{valueItem}</div>
            </div>
        );
    }
}

export default Field;
