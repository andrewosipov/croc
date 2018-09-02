import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/Filter.css';

class Filter extends Component {
    static propTypes = {};

    state = {
        search: ''
    };

    changeHandler = (ev) => {
        this.setState({
            search: ev.target.value
        })
    };

    render() {
        return (
            <div className="Filter">
                <input type="text" className="Filter__search" onChange={this.changeHandler} placeholder="Поиск по имени или ID" value={this.state.search} />
            </div>
        );
    }
}

export default Filter;
