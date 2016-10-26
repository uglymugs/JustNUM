import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import React, { PropTypes } from 'react';

const Task = ({ caseId, done, description, deadline }) =>
  <Card>
    <CardHeader
      title={deadline}
      subtitle={
        <Link to={`/authenticated/cases/edit/${caseId}`}>
          {`Case: ${caseId}`}
        </Link>
      }
      actAsExpander
    />
    <CardText actAsExpander>
      {description}
    </CardText>
    {!done ?
      <CardActions expandable>
        <RaisedButton
          label={'Mark as done'}
          fullWidth
          secondary
        />
      </CardActions>
    : null}
  </Card>;

Task.propTypes = {
  description: PropTypes.string.isRequired,
  deadline: PropTypes.any,
  caseId: PropTypes.any,
  done: PropTypes.bool,
};

export default Task;
