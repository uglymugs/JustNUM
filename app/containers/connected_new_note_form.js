import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';
// import moment from 'moment';
import NoteForm from '../components/note_form';
import createValidate from '../lib/create_validate';
import * as fromReducers from '../reducers';
import * as actions from '../action_creators';
import * as api from '../api';

// const DATE_FORMAT = 'DD/MM/YY';
// const DATE_FORMAT_REGEX = /\d{2}\/\d{2}\/\d{2}/;

// const deadlineStrToDate = str => moment(str, DATE_FORMAT);
// const crntDay = () => moment(moment().toArray().slice(0, 3));

const validate = createValidate({
  text(text) {
    if (text === undefined || text === '') return 'Note cannot be empty';
    return undefined;
  },
});

const mapStateToProps = (state) =>
  ({
    onSubmit: ({ text }) => {
      const currentCase = fromReducers.getCurrentCase(state);

      console.log({
        caseId: currentCase.id,
        text,
      });

      return api.addNote({
        caseId: currentCase.id,
        text,
      });
    },
    onSubmitSuccess: (payload, dispatch) => {
      dispatch(actions.fetchCase(fromReducers.getCurrentCase(state).caseId));
      dispatch(reset('NoteForm'));
    },
  });

// ConnectedNewNoteForm :: React.Component
const ConnectedNewNoteForm = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'NoteForm',
    validate,
  }))(NoteForm);

export default ConnectedNewNoteForm;
