import {CREATE_VIRTUAL_MACHINE, CONFIGURE_VIRTUAL_MACHINE} from "../actions/virtualMachine";

const defaultVirtualMachineState = {
  id: undefined,
  name: undefined,
  size: 10,
  run: false
};

export default (virtualMachineState = defaultVirtualMachineState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CONFIGURE_VIRTUAL_MACHINE:
            virtualMachineState = {...payload};
            return virtualMachineState;

        case CREATE_VIRTUAL_MACHINE:
            return virtualMachineState;
    }

    return virtualMachineState;
}