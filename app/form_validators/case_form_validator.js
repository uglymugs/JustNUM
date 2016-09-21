const caseFormValidator = values => {
  const errors = {};
  const requiredFields = ['notes_create'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default caseFormValidator;
