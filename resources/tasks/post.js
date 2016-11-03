cancelUnless(me, "Please log in", 401);
this.author = me;
console.log('Created task: ', this.description, 'with id: ', this.id, 'for case id: ', this.caseId);
dpd.cases.put({ id: this.caseId }, { tasks: { $push: this.id } });

dpd.cases.get({ id: this.caseId }).then(function (crntCase) {
    console.log('Case #', crntCase.id, ' has tasks: ', crntCase.tasks);
});