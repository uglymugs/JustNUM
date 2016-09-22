
const editCase = (cases, formData, caseId) => {
  console.log('---->', formData, caseId);
  return cases.map(crntCase => {
    if (crntCase.caseCaseId !== caseId) return crntCase;
    return Object.assign(
      {},
      crntCase,
      formData,
    );
  });
};

export default editCase;
