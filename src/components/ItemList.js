import React, {Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

import '../styles/ItemList.css';

class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array
    };

    render() {
        const {
            items = [],
            activeItem = 0,
            onClick: clickHandler = () => null
        } = this.props;
        return (
            <ul className="ItemList">
                {
                    items.map((item, index) =>
                        <Item
                            id={item.id}
                            name={item.name}
                            isActive={index === activeItem}
                            onClick={ () => clickHandler(index) }
                            key={item.id}
                        />
                    )
                }
            </ul>
        );
    }
}

export default ItemList;
