import createValidate from '../lib/create_validate';

const validate = createValidate({
  caseId: (caseId) => {
    if (!caseId) return 'Case id required';
    return undefined;
  },

  contacts: (contacts) => {
    if (!contacts) return 'Contacts required';
    return undefined;
  },
});

export default validate;
