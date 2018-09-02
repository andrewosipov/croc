import React, {Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class ItemList extends Component {
    static propTypes = {};

    render() {
        return (
            <ul className="ItemList">
                <Item id="id-1" name="Name 1" />
                <Item id="id-2" name="Name 2" />
                <Item id="id-3" name="Name 3" />
            </ul>
        );
    }
}

export default ItemList;
