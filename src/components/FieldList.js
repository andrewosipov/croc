import React, {Component} from 'react';
import Field from './Field';
import PropTypes from 'prop-types';

import '../styles/FieldList.css';

class FieldList extends Component {
    static propTypes = {};

    render() {
        const {activeSnapshot} = this.props;
        return (
            <div className="FieldList">
                <Field
                    label="Образ диска"
                    value={activeSnapshot.name}
                    type="label"
                />
                <Field
                    label="Описание"
                    value="111"
                    type="text"
                    onChange={() => null}
                />
                <Field
                    label="Размер диска"
                    value="111"
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
