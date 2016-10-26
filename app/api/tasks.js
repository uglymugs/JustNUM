/* global dpd */

export const getTaskList = () => {
  const opts = {};
  opts.$sort = { deadline: -1 };
  opts.$limit = 20;
  return dpd.tasks.get(opts);
};

export const dummy = () => null;
