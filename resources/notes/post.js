cancelUnless(me, "Please log in", 401);
this.dateCreated = Date.now();
this.author = me;

dpd.cases.put({ id: this.caseId }, { notes: { $push: this.id } });
