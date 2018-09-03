export const CREATE_VIRTUAL_MACHINE = 'CREATE_VIRTUAL_MACHINE';
export const CONFIGURE_VIRTUAL_MACHINE = 'CONFIGURE_VIRTUAL_MACHINE';
export const SUCCESS_VIRTUAL_MACHINE = 'SUCCESS_VIRTUAL_MACHINE';

export const configureVirtualMachine = (virtualMachine) => ({
    type: CONFIGURE_VIRTUAL_MACHINE,
    payload: {
        ...virtualMachine
    }
});

export const createVirtualMachine = () => ({
    type: CREATE_VIRTUAL_MACHINE
});

export const successVirtualMachine = () => ({
    type: SUCCESS_VIRTUAL_MACHINE
});