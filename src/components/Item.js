import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/ItemList.css';

class Item extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        isActive: PropTypes.bool,
        onClick: PropTypes.func
    };

    render() {
        const {id, name, isActive, onClick} = this.props;
        const activeClassName = isActive ? 'ItemList-item--active' : '';
        return (
            <li className={`ItemList-item ${activeClassName}`} onClick={onClick}>
                <span className="ItemList-item__id">{id}</span>
                <span className="ItemList-item__name">{name}</span>
            </li>
        );
    }
}

export default Item;
