import generateCases from './get_initial_cases';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const createCase = (newCase) =>
  delay(500).then(() => {
    const cases = JSON.parse(window.localStorage.getItem('cases'));
    const newCases = {
      ...cases,
      [newCase.caseId]: newCase,
    };
    window.localStorage.setItem('cases', JSON.stringify(newCases));
    return newCase;
  });

export const getLastTwentyCases = () =>
  delay(500).then(() => {
    const cases = JSON.parse(window.localStorage.getItem('cases'));
    if (!cases) return Promise.all(generateCases().map(createCase));
    return cases;
  });
