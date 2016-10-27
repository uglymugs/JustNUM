import dpdRun from '../lib/dpd_run';

export const addTask =
  dpdRun(dpd.tasks.post);


export const getTaskList = () => {
  const opts = {};
  opts.$sort = { deadline: -1 };
  opts.$limit = 20;
  return dpd.tasks.get(opts);
};
