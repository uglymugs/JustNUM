
const testCases = [
  { id: '12', name: 'Case A', status: 'active' },
  { id: '13', name: 'Case B', status: 'completed' },
  { id: '14', name: 'Case C', status: 'pending' },
  { id: '15', name: 'Case D', status: 'active' },
  { id: '16', name: 'Case E', status: 'active' },
  { id: '17', name: 'Case F', status: 'active' },
];

// cases :: [Case] -> Action -> [Case]
const cases = (state = testCases, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cases;
