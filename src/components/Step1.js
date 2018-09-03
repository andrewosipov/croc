import React, {Component} from 'react';
import StepperCrumbs from './StepperCrumbs';
import ItemList from './ItemList';
import Filter from '../containers/Filter';
import Button from './Button';
import {filteredSnapshots} from '../helpers';
import PropTypes from 'prop-types';

import '../styles/Step.css';

class Step1 extends Component {
    static propTypes = {};

    render() {
        const {snapshots, filter, activeSnapshotId, selectSnapshot, configureVirtualMachine} = this.props;
        return (
            <div>
                <StepperCrumbs activeStep={1} />
                <div className="Step Step--one">
                    <Filter />
                    <ItemList
                        items={filteredSnapshots(snapshots, filter.search)}
                        activeItem={activeSnapshotId}
                        onClick={(activeIndex) => selectSnapshot(activeIndex)}
                    />
                </div>
                <div className="Button-container">
                    <Button to="/step2" value="Выбрать" onClick={() => configureVirtualMachine(activeSnapshotId)} />
                </div>
            </div>
        );
    }
}

export default Step1;
