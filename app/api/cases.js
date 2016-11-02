/* global dpd */
import escaperegexp from 'lodash.escaperegexp';
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

export const getCase = (caseRef) =>
  dpd.cases.get({ caseRef }).then((caseList) => {
    if (caseList.length) return caseList[0];
    return Promise.reject({
      message: 'No cases match ID',
      status: '404',
    });
  });

export const getCaseList = (filter) => {
  const opts = {};
  opts.$sort = { dateCreated: -1 };
  opts.$limit = 20;
  opts.$fields = {
    caseRef: 1,
    dateCreated: 1,
    operation: 1,
  };
  if (filter.length > 3) opts.caseRef = { $regex: `^${escaperegexp(filter)}`, $options: 'i' };

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

