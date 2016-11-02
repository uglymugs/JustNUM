import createValidate from '../lib/create_validate';

const validate = createValidate({
  text(text) {
    if (text === undefined || text === '') return 'Note cannot be empty';
    return undefined;
  },
});

export default validate;
