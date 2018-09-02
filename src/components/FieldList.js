import React, {Component} from 'react';
import Field from './Field';
import PropTypes from 'prop-types';

import '../styles/FieldList.css';

class FieldList extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="FieldList">
                <Field label="Образ диска" value="111" />
                <Field label="Описание" value="111" />
                <Field label="Размер диска" value="111" />
                <Field label="Запустить при создании" value="111" />
            </div>
        );
    }
}

export default FieldList;
