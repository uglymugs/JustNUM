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
    contacts: genContacts(),
    db: coinFlip(),
    email: coinFlip(),
    caseId: faker.random.uuid(),
    info: coinFlip(),
    nc: coinFlip(),
    notesCreate: faker.lorem.paragraph(),
    operation: faker.commerce.color(),
    pc: coinFlip(),
    police: coinFlip(),
    referral: null,
    sp: coinFlip(),
    sms: coinFlip(),
    timeline: null,
    web: coinFlip(),
    createdDate: faker.date.past().toString().split(' G')[0].slice(0, -8),
  });


const generateCases = () =>
  Array.from({ length: 20 }).map(genCaseData);

export default generateCases;
