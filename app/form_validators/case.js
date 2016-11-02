import createValidate from '../lib/create_validate';

const validate = createValidate({
  caseRef: (caseRef) => {
    if (!caseRef) return 'Case ID required';
    return undefined;
  },

  referral: (referral) => {
    if (!referral) return 'Referral required';
    return undefined;
  },

  area: (area) => {
    if (!area) return 'Area required';
    return undefined;
  },

  operation: (operation) => {
    if (!operation) return 'Operation required';
    return undefined;
  },

  contacts: (contacts) => {
    if (!contacts) return 'Contacts required';
    return undefined;
  },
});

export default validate;
