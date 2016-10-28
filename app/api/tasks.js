import dpdRun from '../lib/dpd_run';

export const addTask =
  dpdRun(dpd.tasks.post);

export const editTask =
  dpdRun(dpd.tasks.put);

export const getTaskList = (filter) => {
  const opts = {};
  opts.$sort = { deadline: -1 };
  opts.$limit = 20;
  if (filter.length) opts.status = filter;
  return dpd.tasks.get(opts);
};
