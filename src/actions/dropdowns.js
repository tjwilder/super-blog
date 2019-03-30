export const toggleDropdown = (id) => {
    console.log('Toggling Dropdown: ' + id)
    return {
      type: 'TOGGLE_DROPDOWN',
      id
    };
};
