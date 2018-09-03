import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/Filter.css';

class Filter extends Component {
    static propTypes = {
        searchSnapshots: PropTypes.func,
        search: PropTypes.string
    };

    changeHandler = (ev) => {
        const {searchSnapshots} = this.props;
        searchSnapshots(ev.target.value);
    };

    render() {
        const {search} = this.props;
        return (
            <div className="Filter">
                <input
                    type="text"
                    className="Filter__search"
                    onChange={this.changeHandler}
                    placeholder="Поиск по имени или ID"
                    value={search}
                />
            </div>
        );
    }
}

export default Filter;
