import React from 'react';
import ConnectedCaseNotesList from '../containers/connected_case_note_list';
import ConnectedNewNoteForm from '../containers/connected_new_note_form';


const CaseNotesManager = () =>
  <div>
    <ConnectedNewNoteForm />
    <ConnectedCaseNotesList />
  </div>;

export default CaseNotesManager;
