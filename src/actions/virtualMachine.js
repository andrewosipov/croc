export const CREATE_VIRTUAL_MACHINE = 'CREATE_VIRTUAL_MACHINE';

export const createVirtualMachine = (virtualMachine) => ({
    type: CREATE_VIRTUAL_MACHINE,
    payload: {
        virtualMachine
    }
});