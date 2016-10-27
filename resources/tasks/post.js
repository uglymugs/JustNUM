cancelUnless(me, "Please log in", 401);
this.author = me;

dpd.cases.put({ id: this.caseId }, { tasks: { $push: this.id } });