import moment from 'moment';
import createValidate from '../lib/create_validate';

const DATE_FORMAT = 'DD/MM/YY';
const DATE_FORMAT_REGEX = /\d{2}\/\d{2}\/\d{2}/;

const deadlineStrToDate = str => moment(str, DATE_FORMAT);
const crntDay = () => moment(moment().toArray().slice(0, 3));

const validate = createValidate({
  description(description) {
    if (description === undefined || description === '') return 'Description required';
    return undefined;
  },

  deadline(deadline) {
    if (deadline === undefined) return 'Task date required';
    if (!DATE_FORMAT_REGEX.test(deadline)) return 'Invalid date format';
    if (deadlineStrToDate(deadline).isBefore(crntDay())) return 'Date cannot be before today';
    return undefined;
  },
});

export default validate;
