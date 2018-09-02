import {CREATE_VIRTUAL_MACHINE, CONFIGURE_VIRTUAL_MACHINE} from "../actions/virtualMachine";

export default (virtualMachineState = '', action) => {
    const {type, payload} = action;

    switch (type) {
        case CONFIGURE_VIRTUAL_MACHINE:
            return virtualMachineState;

        case CREATE_VIRTUAL_MACHINE:
            return virtualMachineState;
    }

    return virtualMachineState;
}