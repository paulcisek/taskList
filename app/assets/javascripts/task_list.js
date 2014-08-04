window.TaskList = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    var tasks = new TaskList.Collections.Tasks(data.tasks)};
    new TaskList.Routers.Tasks({tasks: tasks});
    Backbone.history.start();

$(document).ready(function(){
  TaskList.initialize();
});
