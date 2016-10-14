import CASE_TEMPLATE from './case_template.js';

const fillDefaults = (newCase) => ({
  ...CASE_TEMPLATE,
  ...newCase,
});

export default fillDefaults;
