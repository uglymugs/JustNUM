import CASE_TEMPLATE from './case_template';


const addCase = (cases, formData, uuid) => {
  // const cleansedData = removePrefixFromKeys(formData);
  const newCase = Object.assign({ uuid }, CASE_TEMPLATE, formData);
  return [newCase, ...cases];
};

export default addCase;
