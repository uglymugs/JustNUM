import faker from 'faker';
import { compose } from 'ramda';
import {
  getCasesFromLocalStorage,
  saveCasesToLocalStorage } from './local_storage';

const coinFlip = () => Math.random() > 0.5;

const genContacts = () =>
  Array
  .from({ length: 3 })
  .map(() => faker.fake('{{name.firstName}} {{name.lastName}} - {{phone.phoneNumber}}'));

const genCaseData = () =>
  ({
    caseApp: coinFlip(),
    caseArea: faker.address.city(),
    caseContacts: genContacts(),
    caseDb: coinFlip(),
    caseEmail: coinFlip(),
    caseCaseId: faker.random.uuid(),
    caseInfo: coinFlip(),
    caseNc: coinFlip(),
    caseNotesCreate: faker.lorem.paragraph(),
    caseOperation: faker.commerce.color(),
    casePc: coinFlip(),
    casePolice: coinFlip(),
    caseReferral: null,
    caseSp: coinFlip(),
    caseSms: coinFlip(),
    caseTimeline: null,
    caseWeb: coinFlip(),
    caseCreatedDate: faker.date.past().toString().split(' G')[0].slice(0, -8),
  });


const generateCases = () =>
  Array.from({ length: 20 }).map(genCaseData);

const generateAndSaveCases =
  compose(saveCasesToLocalStorage, generateCases);

const getInitialCases = () =>
  getCasesFromLocalStorage() || generateAndSaveCases();

export default getInitialCases;
