cancelUnless(me, "Please log in", 401);
dpd.notes.get({id: {$in: this.notes}})
.then((notes) => {
    this.notes = notes;
})
.then(() => {
    dpd.tasks.get({id: {$in: this.tasks}})
    .then((tasks) => {
        this.tasks = tasks;
    });
})
.then(() => {
    dpd.notes.get({$id: {$in: this.notes}})
    .then((notes) => {
        this.notes = notes;
    });
})