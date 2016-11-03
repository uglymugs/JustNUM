import createValidate from '../lib/create_validate';

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

export default validate;
