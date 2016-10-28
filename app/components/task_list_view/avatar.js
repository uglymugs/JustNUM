import Avatar from 'material-ui/Avatar';
import AssignmentLate from 'material-ui/svg-icons/action/assignment-late';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Hourglass from 'material-ui/svg-icons/action/hourglass-empty';
import { white } from 'material-ui/styles/colors';
import React, { PropTypes } from 'react';

const StatusAvatar = ({ status }) => {
  let icon;
  if (status === 'done') icon = <Assignment color={white} />;
  if (status === 'pending') icon = <Hourglass color={white} />;
  if (status === 'todo') icon = <AssignmentLate color={white} />;
  return <Avatar icon={icon} />;
};

StatusAvatar.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusAvatar;

