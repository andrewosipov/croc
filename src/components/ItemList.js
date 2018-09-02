import React, {Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

import '../styles/ItemList.css';

class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array
    };

    state = {
        activeItem: 0
    };

    clickHandler = (index) => {
        this.setState({ activeItem: index });
    };

    render() {
        const {items = []} = this.props;
        return (
            <ul className="ItemList">
                {
                    items.map((item, index) =>
                        <Item
                            id={item.id}
                            name={item.name}
                            isActive={index === this.state.activeItem}
                            onClick={ () => this.clickHandler(index) }
                            key={item.id}
                        />
                    )
                }
            </ul>
        );
    }
}

export default ItemList;
