import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import React, { PropTypes } from 'react';
import AssignmentLate from 'material-ui/svg-icons/action/assignment-late';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Hourglass from 'material-ui/svg-icons/action/hourglass-empty';
import { white, green500, red500, amber500 } from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';

const Task = ({ caseId, status, description, deadline }) => {
  let icon;
  let cardActions;
  let backgroundColor;
  if (status === 'done') {
    icon = <Assignment />;
    backgroundColor = green500;
    cardActions = (
      <CardActions expandable>
        <FlatButton
          label={'Remove done status'}
          primary
        />
        <FlatButton
          label={'Mark as pending'}
          secondary
        />
      </CardActions>);
  }
  if (status === 'pending') {
    icon = <Hourglass />;
    backgroundColor = amber500;
    cardActions = (
      <CardActions expandable>
        <FlatButton
          label={'Mark as done'}
          primary
        />
        <FlatButton
          label={'Remove pending status'}
          secondary
        />
      </CardActions>);
  }
  if (status === 'todo') {
    icon = <AssignmentLate />;
    backgroundColor = red500;
    cardActions = (
      <CardActions expandable>
        <FlatButton
          label={'Mark as done'}
          primary
        />
        <FlatButton
          label={'Mark as pending'}
          secondary
        />
      </CardActions>);
  }
  return (<Card style={{ marginBottom: '10px' }}>
    <CardHeader
      title={`Deadline: ${deadline}`}
      subtitle={
        <Link to={`/authenticated/cases/edit/${caseId}`}>
          {`Case: ${caseId}`}
        </Link>
      }
      avatar={<Avatar color={white} backgroundColor={backgroundColor} icon={icon} />}
      actAsExpander
    />
    <CardText actAsExpander>
      {description}
    </CardText>
    {cardActions}
  </Card>);
};

Task.propTypes = {
  description: PropTypes.string.isRequired,
  deadline: PropTypes.any,
  caseId: PropTypes.any,
  status: PropTypes.string.isRequired,
};

export default Task;
