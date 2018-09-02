import React, {Component} from 'react';
import Field from './Field';
import PropTypes from 'prop-types';

import '../styles/FieldList.css';

class FieldList extends Component {
    static propTypes = {};

    render() {
        const {activeSnapshot, virtualMachine, configureVirtualMachine} = this.props;
        return (
            <div className="FieldList">
                <Field
                    label="Образ диска"
                    value={activeSnapshot.id}
                    type="label"
                />
                <Field
                    label="Описание"
                    value={activeSnapshot.name}
                    type="text"
                    onChange={() => null}
                />
                <Field
                    label="Размер диска (ГБ)"
                    value="10"
                    type="text"
                    onChange={() => null}
                />
                <Field
                    label="Запустить при создании"
                    value="111"
                    type="bool"
                    onChange={() => null}
                />
            </div>
        );
    }
}

export default FieldList;
