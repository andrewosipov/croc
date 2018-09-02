import {CREATE_VIRTUAL_MACHINE, CONFIGURE_VIRTUAL_MACHINE} from "../actions/virtualMachine";

const defaultVirtualMachineState = {
  id: undefined,
  name: undefined,
  size: undefined,
  run: undefined
};

export default (virtualMachineState = defaultVirtualMachineState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CONFIGURE_VIRTUAL_MACHINE:
            return virtualMachineState;

        case CREATE_VIRTUAL_MACHINE:
            return virtualMachineState;
    }

    return virtualMachineState;
}