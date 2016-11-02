import createValidate from '../lib/create_validate';

const validator = {
  username: (username) => {
    if (!username) return 'Required';
    if (username.length < 3) return 'Must be 4 characters or more';
    return undefined;
  },
  password: (password) => {
    if (!password) return 'Required';
    return undefined;
  },
};


const validate = createValidate(validator);

export default validate;
