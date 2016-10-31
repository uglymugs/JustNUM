import faker from 'faker';

const coinFlip = () => Math.random() > 0.5;

const genContacts = () =>
  Array
  .from({ length: 3 })
  .map(() => faker.fake('{{name.firstName}} {{name.lastName}} - {{phone.phoneNumber}}'));

const genCaseData = () =>
  ({
    app: coinFlip(),
    area: faker.address.city(),
    contacts: genContacts().join('\n'),
    db: coinFlip(),
    email: coinFlip(),
    caseRef: faker.random.uuid(),
    info: coinFlip(),
    nc: coinFlip(),
    notes: [],
    tasks: [],
    operation: faker.commerce.color(),
    pc: coinFlip(),
    police: coinFlip(),
    referral: 'referral',
    sp: coinFlip(),
    sms: coinFlip(),
    web: coinFlip(),
  });


const generateCases = () =>
  Array.from({ length: 20 }).map(genCaseData);

export default generateCases;
