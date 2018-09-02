import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../styles/ItemList.css';

class Item extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        const {id, name} = this.props;
        return (
            <li className="ItemList-item">
                <span className="ItemList-item__id">{id}</span>
                <span className="ItemList-item__name">{name}</span>
            </li>
        );
    }
}

export default Item;
