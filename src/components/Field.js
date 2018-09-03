import React, {Component} from 'react';
import {getBool} from '../helpers';
import PropTypes from 'prop-types';

class Field extends Component {
    static propTypes = {
        label: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool
        ]),
        type: PropTypes.string,
        onChange: PropTypes.func
    };

    render() {
        const {
            label = 'Label',
            value = 'Value',
            type = 'label',
            isValid = true,
            onChange = () => null
        } = this.props;

        let valueItem = null;
        switch (type) {
            case 'label': valueItem = value; break;
            case 'text': valueItem = <input type="text" value={value} onChange={onChange} />; break;
            case 'bool': valueItem = <input type="checkbox" checked={getBool(value)} onChange={onChange} />; break;
            default: valueItem = value;
        }

        const validClassName = isValid ? '' : 'FieldItem--error';

        return (
            <div className={`FieldItem ${validClassName}`}>
                <div className="FieldItem__label">{label}</div>
                <div className="FieldItem__value">{valueItem}</div>
            </div>
        );
    }
}

export default Field;
