export const addTask = (userId, caseId, task) =>
  console.log('----->', userId, caseId, task);


export const getTaskList = () => {
  const opts = {};
  opts.$sort = { deadline: -1 };
  opts.$limit = 20;
  return dpd.tasks.get(opts);
};
