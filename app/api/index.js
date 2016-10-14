import generateCases from './get_initial_cases';
import fillDefaults from './add_case.js';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const createCase = (newCase) =>
  delay(500).then(() => {
    const completeCase = fillDefaults(newCase);
    const cases = JSON.parse(window.localStorage.getItem('cases'));
    const newCases = {
      ...cases,
      [completeCase.caseId]: completeCase,
    };
    window.localStorage.setItem('cases', JSON.stringify(newCases));
    return completeCase;
  });

export const getLastTwentyCases = () =>
  delay(500).then(() => {
    const cases = JSON.parse(window.localStorage.getItem('cases'));
    if (!cases) return Promise.all(generateCases().map(createCase));
    return cases;
  });

export const editCase = (newCase) =>
  delay(500).then(() => {
    const cases = JSON.parse(window.localStorage.getItem('cases'));
    const newCases = {
      ...cases,
      [newCase.caseId]: newCase,
    };
    window.localStorage.setItem('cases', JSON.stringify(newCases));
    return newCase;
  });
