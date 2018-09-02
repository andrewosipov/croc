import React, {Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

import '../styles/ItemList.css';

class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array
    };

    render() {
        const {items} = this.props;
        return (
            <ul className="ItemList">
                {items.map(item => <Item id={item.id} name={item.name} key={item.id} />)}
            </ul>
        );
    }
}

export default ItemList;
