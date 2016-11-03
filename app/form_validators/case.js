import createValidate from '../lib/create_validate';
import * as api from '../api';

const validate = createValidate({
  caseRef: (caseRef) => {
    if (!caseRef) return 'Case ID required';
    if (/\//.test(caseRef)) return 'Case Id cannot contain "/"';
    return undefined;
  },

  contacts: (contacts) => {
    if (!contacts) return 'Contacts required';
    return undefined;
  },
});

export const asyncValidate = (values) =>
  api.getCase(values.caseRef).then(() => {
    // if promise resolves caseRef exists
    const error = { caseRef: 'That Case ID already exists' };
    throw error;
  });

export default validate;
