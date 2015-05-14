// on page load
$(function(){
  // get and render the food
  Food.all();
  View.init();
});

// // // // // // //

// VIEW OBJECT
function View() {};
View.init = function() {
  $('form').on("submit",function(e) {
    e.preventDefault()
    foodParams = $(this).serialize();
    Food.create(foodParams);
  })
}

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

Food.create = function(foodParams) {
  $.post("/foods", foodParams).done(function(res){
    // once done, re-render all foods
    Food.all();
  }).done(function(res){
    // reset form
    $("form")[0].reset();
  });
}
};
