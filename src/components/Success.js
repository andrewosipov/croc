import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Success extends Component {
    static propTypes = {};

    render() {
        const {virtualMachine} = this.props;
        return (
            <div>
                <h2>
                    Успешно создана виртуальная машина
                </h2>
                <p>Id: {virtualMachine.id}</p>
                <p>Описание: {virtualMachine.name}</p>
                <p>Размер (ГБ): {virtualMachine.size}</p>
                <p>Запустить при создании: {virtualMachine.run.toString()}</p>
            </div>
        );
    }
}

export default Success;
