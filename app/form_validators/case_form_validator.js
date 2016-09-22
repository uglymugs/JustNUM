const caseFormValidator = values => {
  const errors = {};
  const requiredFields = ['CaseIdFields_id', 'CaseNotesCreate__notesCreate'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
};

export default caseFormValidator;
