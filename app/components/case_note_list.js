import React, { PropTypes } from 'react';
import Note from './note';

const style = {
  noteList: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
};

const CaseNoteList = ({ notes }) =>
  <div style={style.noteList}>
    {notes.map((note, idx) =>
      <Note key={idx} note={note} />)}
  </div>;

const NoteData = PropTypes.shape({
  text: PropTypes.string.isRequired,
});

CaseNoteList.propTypes = {
  notes: PropTypes.arrayOf(NoteData).isRequired,
};

export default CaseNoteList;
