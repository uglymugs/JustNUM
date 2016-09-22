import faker from 'faker';

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
    caseOperation: null,
    casePc: coinFlip(),
    casePolice: coinFlip(),
    caseReferral: null,
    caseSp: coinFlip(),
    caseSms: coinFlip(),
    caseTimeline: null,
    caseWeb: coinFlip(),
    caseCreatedDate: faker.date.past().toString(),
  });

const getInitialCases = () =>
  Array.from({ length: 20 }).map(genCaseData);

export default getInitialCases;
