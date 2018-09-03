import {CREATE_VIRTUAL_MACHINE, CONFIGURE_VIRTUAL_MACHINE, SUCCESS_VIRTUAL_MACHINE} from "../actions/virtualMachine";

const defaultVirtualMachineState = {
    id: 'id',
    name: 'Name',
    size: 10,
    run: false,
    success: false
};

export default (virtualMachineState = defaultVirtualMachineState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CONFIGURE_VIRTUAL_MACHINE:
            return {...payload};

        case SUCCESS_VIRTUAL_MACHINE: {
            const newState = {...virtualMachineState};
            newState.success = true;
            return newState;
        }

        case CREATE_VIRTUAL_MACHINE:
            return virtualMachineState;

        default:
            return virtualMachineState;
    }


}