import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        const {id, name} = this.props;
        return (
            <li className="Item" key={id}>
                <span className="Item__id">{id}</span>
                <span className="Item__name">{name}</span>
            </li>
        );
    }
}

export default Item;
