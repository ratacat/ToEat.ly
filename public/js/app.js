// on page load
$(function(){
  // get and render the food
  Food.all();
});

// // // // // // //

// VIEW OBJECT
function View() {};
View.render = function(items, parentId, templateId) {
  // render a template
  var template = _.template($("#" + templateId).html());
  // input data into template and append to parent
  $("#" + parentId).html(template({collection: items}));
};

// FOOD OBJECT
function Food() {};
Food.all = function() {
  $.get("/foods", function(res){ 
    // parse the response
    var foods = JSON.parse(res);
    // render the results
    View.render(foods, "food-ul", "foods-template");
  });
};
