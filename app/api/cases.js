/* global dpd */
import { SubmissionError } from 'redux-form';
import { compose } from 'ramda';
import generateCases from './get_initial_cases';
import fillDefaults from './add_case.js';

const toSubmissionError = err => {
  const { errors } = err;
  return new SubmissionError({
    ...errors,
    _error: 'Submission failed',
  });
};

const createCase = (newCase) =>
  dpd.cases.post(
    fillDefaults(newCase)
  );

const editCase = (newCase) =>
  dpd.cases.put(newCase);

export const getCase = (caseId) =>
  dpd.cases.get({ caseId }).then((currentCase) => currentCase[0]);

export const getCaseList = () =>
  dpd.cases
    .get({
      $sort: { dateCreated: -1 },
      $limit: 20,
    })
    .then((cases) =>
      (cases.length === 0 ? Promise.all(generateCases().map(createCase)) : cases));

export const submitCaseForm = (view) => (newCase) =>
  new Promise((resolve, reject) => {
    if (view === 'new') {
      return createCase(newCase).then(resolve, compose(reject, toSubmissionError));
    } else if (view === 'edit') {
      return editCase(newCase).then(resolve, compose(reject, toSubmissionError));
    }
    return undefined;
  });

