import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Field extends Component {
    static propTypes = {};

    render() {
        const {label = 'Label', value = 'Value', type = 'label'} = this.props;
        let valueItem = null;
        switch (type) {
            case 'label': valueItem = value; break;
            case 'text': valueItem = <input type="text" value={value} />; break;
            case 'bool': valueItem = <input type="checkbox" />
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
