if (["todo", "pending", "done"].indexOf(this.status) === -1) {
    error("status", "Invalid value: " + this.status + ", must be one of: todo, pending, done");
}