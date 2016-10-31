import React, { PropTypes } from 'react';

const style = {
  noteList: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const CaseNoteList = ({ notes }) =>
  <div style={style.noteList}>
    {notes.map((note, idx) =>
      <div key={idx}>{note.text}</div>)}
  </div>;

const Note = PropTypes.shape({
  caseId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

CaseNoteList.propTypes = {
  notes: PropTypes.arrayOf(Note).isRequired,
};

export default CaseNoteList;
