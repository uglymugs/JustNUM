import { ADD_CASE, EDIT_CASE } from '../../action_types';
import addCase from './add_case';
import editCase from './edit_case';
import getInitialCases from './get_initial_cases';
import { saveCasesToLocalStorage } from './local_storage';

// cases :: [Case] -> Action -> [Case]
const cases = (state = getInitialCases(), action) => {
  switch (action.type) {
    case ADD_CASE:
      return saveCasesToLocalStorage(addCase(state, action.formData, action.id));
    case EDIT_CASE:
      return saveCasesToLocalStorage(editCase(state, action.formData, action.caseId));
    default:
      return state;
  }
};

export default cases;
