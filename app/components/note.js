import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import muiThemeable from 'material-ui/styles/muiThemeable';


const style = {
  paper: {
    width: '100%',
    marginTop: 20,
    padding: 10,
  },
  h1: {
    fontSize: '1.2em',
    lineHeight: '1.5em',
    marginTop: 0,
    marginBottom: 5,
  },
  h2: {
    fontSize: '0.9em',
    lineHeight: '1.2em',
    marginTop: 0,
    marginBottom: 15,
  },
};

const Note = ({ note, muiTheme: { palette } }) =>
  <Paper style={style.paper} zDepth={2}>
    <h1 style={{ ...style.h1, color: palette.accent3Color }}>
      Created by: {note.author.firstName} {note.author.lastName}
    </h1>
    <h2 style={{ ...style.h2, color: palette.accent1Color }}>
      {moment(note.dateCreated).format('dddd, D MMMM YYYY')}
    </h2>
    <div>{note.text}</div>
  </Paper>;


const NoteData = PropTypes.shape({
  text: PropTypes.string,
});

Note.propTypes = {
  note: PropTypes.shape(NoteData),
  muiTheme: PropTypes.object,
};

export default muiThemeable()(Note);
