
export const getCasesFromLocalStorage = () =>
  JSON.parse(window.localStorage.getItem('cases'));

export const saveCasesToLocalStorage = cases => {
  window.localStorage.setItem('cases', JSON.stringify(cases));
  return cases;
};
