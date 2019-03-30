// TODO: Get real state
// TODO: Minimize all dropdowns if you click in the body
const defaultState = [
  {
    id: 0,
    title: 'Onee',
    items: [
      {
        id: 3,
        title: 'onehunderedpbuillon',
      },
      {
        id: 4,
        title: 'twelve',
        action: () => window.alert('Hellooop'),
      }
    ],
  },
  {
    id: 1,
    title: 'TWOOBLe',
    action: () => window.alert('Howdyp'),
  },
  {
    id: 2,
    title: 'Zo Fird Bist Goy Ebar',
  }
];

const navbar = (state = defaultState, action) => {
  console.log('Reducing, ' + JSON.stringify(state) + ', ..., ' + JSON.stringify(action))
  switch (action.type) {
    case 'TOGGLE_DROPDOWN':
      const id = action.id;
      // TODO: Add support for toggling nested dropdowns
      // Toggle existing Dropdown and make sure others are off
      const newState = 
        state.map((item, i) => {
          console.log(item, id)
          if (item.id === id)
            item.active = !item.active;
          else
            item.active = false;
          return item;
        });
      return newState;
    case 'CLOSE_DROPDOWN':
      return {
        ...state,
        dropdowns: false
      }
    default:
      return state
  }
}

export default navbar
