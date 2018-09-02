import {CREATE_VIRTUAL_MACHINE} from "../actions/virtualMachine";

export default (virtualMachineState = '', action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_VIRTUAL_MACHINE:
            return virtualMachineState;
    }

    return virtualMachineState;
}