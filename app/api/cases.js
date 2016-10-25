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

export const getCaseList = (filter) => {
  const opts = {};
  opts.$sort = { dateCreated: -1 };
  opts.$limit = 20;
  opts.$fields = {
    caseId: 1,
    dateCreated: 1,
    operation: 1,
  };
  if (filter.length > 3) opts.caseId = { $regex: `^${filter}`, $options: 'i' };

  return dpd.cases
    .get(opts)
    .then((cases) =>
        (!cases.length && !filter.length ?
          Promise.all(generateCases().map(createCase)) : cases));
};

export const submitCaseForm = (view) => (newCase) =>
  new Promise((resolve, reject) => {
    if (view === 'new') {
      return createCase(newCase).then(resolve, compose(reject, toSubmissionError));
    } else if (view === 'edit') {
      return editCase(newCase).then(resolve, compose(reject, toSubmissionError));
    }
    return undefined;
  });

