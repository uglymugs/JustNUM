import { reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import NoteForm from '../components/note_form';
import * as fromReducers from '../reducers';
import * as actions from '../action_creators';
import * as api from '../api';
import validate from '../form_validators/note';


const mapStateToProps = (state) =>
  ({
    onSubmit: ({ text }) => {
      const currentCase = fromReducers.getCurrentCase(state);
      return api.addNote({
        caseId: currentCase.id,
        text,
      });
    },
    onSubmitSuccess: (payload, dispatch) => {
      dispatch(actions.fetchCase(fromReducers.getCurrentCase(state).caseRef));
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
