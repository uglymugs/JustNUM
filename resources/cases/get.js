cancelUnless(me, "Please log in", 401);

dpd.notes.get({id: {$in: this.notes}, $sort: { dateCreated: -1 }})
.then((notes) => {
    this.notes = notes;
})
.then(() => {
    dpd.tasks.get({id: {$in: this.tasks}, $sort: {deadline: 1}})
    .then((tasks) => {
        this.tasks = tasks;
    });
})
