
const editCase = (cases, formData, caseId) =>
  cases.map(crntCase => {
    if (crntCase.caseCaseId !== caseId) return crntCase;
    return Object.assign(
      {},
      crntCase,
      formData,
    );
  });

export default editCase;
