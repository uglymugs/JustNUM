import { connect } from 'react-redux';
import CaseNoteList from '../components/case_note_list';
import * as fromReducers from '../reducers';

const mapStateToProps = (state) =>
  ({
    notes: fromReducers.getCurrentCaseNotes(state) || [],
  });

const ConnectedCaseNoteList =
  connect(mapStateToProps)(CaseNoteList);

export default ConnectedCaseNoteList;
