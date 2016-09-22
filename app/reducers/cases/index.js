import { ADD_CASE, EDIT_CASE } from '../../action_types';
import addCase from './add_case';
import editCase from './edit_case';
import getInitialCases from './get_initial_cases';

// cases :: [Case] -> Action -> [Case]
const cases = (state = getInitialCases(), action) => {
  switch (action.type) {
    case ADD_CASE:
      return addCase(state, action.formData, action.id);
    case EDIT_CASE:
      return editCase(state, action.formData, action.caseId);
    default:
      return state;
  }
};

export default cases;
