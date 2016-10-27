import { SubmissionError } from 'redux-form';
import { curry, compose } from 'ramda';

// toSubmissionError :: Error -> SubmissionError
const toSubmissionError = err =>
  new SubmissionError({
    _error: err.message,
    ...err.errors,
  });


// Wraps dpd's weird promises into a proper native promise
// And wrap any errors into redux-form's submission error
const dpdRun = curry((f, payload) =>
  new Promise((resolve, reject) =>
    f(payload)
      .then(resolve)
      .fail(compose(reject, toSubmissionError))));

export default dpdRun;
