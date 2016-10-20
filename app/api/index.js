/* global dpd */
import generateCases from './get_initial_cases';
import fillDefaults from './add_case.js';

export { login, authenticateCookie } from './login';

export const createCase = (newCase) =>
  dpd.cases.post(
    fillDefaults(newCase)
  );

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

export const editCase = (newCase) =>
  dpd.cases.put(newCase);
