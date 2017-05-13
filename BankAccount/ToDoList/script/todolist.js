/* Module for ToDo List application */
var ToDoList = function () {

    var task = {
        name: ko.observable(),
        description: ko.observable(),
        status: ko.observable(),
        priority: ko.observable()
    };
    var states = {
        NEW: 'new',
        COMPLETE: 'complete'
    };
    var tasks = ko.observableArray();
    /* add members here */
    var addTask = function () {
        tasks.push({
            name: task.name(),
            description: task.description(),
            priority: task.priority(),
            status: ko.observable('new')
        });
    };

   
       
    var deleteTask = function (task) {
        console.log("Deleting task with name" + task.name);
        tasks.remove(task);
    };
    var completeTask = function (task) {
        console.log("completing task for" + task.name);
        task.status('complete');
    };
    var clearTask = function () {
        task.name(null);
        task.description(null);
        task.priority(1);
    };

    var sortByPriority = function () {
        console.log("Sorting tasks by priority");
        tasks.sort(
            function (left, right) {
                return left.priority == right.priority ?
                    0
                    :
                    (left.priority < right.priority ? -1 : 1)
            });
    };
    var sortByName = function () {
        console.log("Sorting tasks by name");
        tasks.sort(
            function (left, right) {
                return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1)
            });
    };

    //observable to compute number of completed tasks
    //var numOfCompletedTasks = ko.computed(function () {
    //    debugger;
    //    var completedTasks = ko.utils.arrayFilter(tasks(), function (task) {
    //        return task.status() == 'complete';
    //    });
    //    return completedTasks.length;
    //});
    var init = function () {
        /* add code to initialize this module */
        ko.applyBindings(ToDoList);
    };

    /* execute the init function when the DOM is ready */
    $(init);

    return {
        /* add members that will be exposed publicly */
        task: task,
        tasks: tasks,
        addTask: addTask,
        deleteTask: deleteTask
       
       
    };
}();