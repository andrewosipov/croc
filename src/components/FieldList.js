import React, {Component} from 'react';
import Field from './Field';
import {isNumeric} from '../helpers';
import PropTypes from 'prop-types';

import '../styles/FieldList.css';

class FieldList extends Component {
    static propTypes = {
        activeSnapshot: PropTypes.object,
        virtualMachine: PropTypes.object,
        status: PropTypes.object,
        configureVirtualMachine: PropTypes.func
    };

    componentDidMount() {
        const {activeSnapshot, configureVirtualMachine} = this.props;
        configureVirtualMachine({
            id: activeSnapshot.id,
            name: activeSnapshot.name,
            size: 10,
            run: false,
            success: false
        });
    }

    nameChangeHandler = (ev) => {
        const {virtualMachine, configureVirtualMachine} = this.props;
        const newVM = {...virtualMachine};

        newVM.name = ev.target.value;
        configureVirtualMachine(newVM);
    };

    sizeChangeHandler = (ev) => {
        if( !isNumeric(ev.target.value) ) return;

        const {virtualMachine, configureVirtualMachine} = this.props;
        const newVM = {...virtualMachine};

        newVM.size = ev.target.value;
        configureVirtualMachine(newVM);
    };

    runChangeHandler = (ev) => {
        const {virtualMachine, configureVirtualMachine} = this.props;
        const newVM = {...virtualMachine};

        newVM.run = !newVM.run;
        configureVirtualMachine(newVM);
    };

    render() {
        const {virtualMachine, status} = this.props;
        return (
            <div className="FieldList">
                <Field
                    label="Образ диска"
                    value={virtualMachine.id}
                    type="label"
                />
                <Field
                    label="Описание"
                    value={virtualMachine.name}
                    type="text"
                    isValid={status.nameValid}
                    onChange={this.nameChangeHandler}
                />
                <Field
                    label="Размер диска (ГБ)"
                    value={virtualMachine.size}
                    type="text"
                    isValid={status.sizeValid}
                    onChange={this.sizeChangeHandler}
                />
                <Field
                    label="Запустить при создании"
                    value={virtualMachine.run}
                    type="bool"
                    onChange={this.runChangeHandler}
                />
            </div>
        );
    }
}

export default FieldList;
