import React, {Component} from 'react';
import StepperCrumbs from './StepperCrumbs';
import ItemList from './ItemList';
import Filter from './Filter';
import Button from './Button';
import PropTypes from 'prop-types';

import '../styles/Step.css';

class Step1 extends Component {
    static propTypes = {};

    render() {
        const {snapshots, activeSnapshot, selectSnapshot} = this.props;
        return (
            <div>
                <StepperCrumbs activeStep={1} />
                <div className="Step Step--one">
                    <Filter />
                    <ItemList
                        items={snapshots}
                        activeItem={activeSnapshot}
                        onClick={(activeIndex) => selectSnapshot(activeIndex)}
                    />
                </div>
                <div className="Button-container">
                    <Button to="/step2" value="Выбрать" />
                </div>
            </div>
        );
    }
}

export default Step1;
