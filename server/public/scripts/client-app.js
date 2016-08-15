$(document).ready(function() {
    console.log("Hello");

  $(".operators").on("click", ".operator", newOperator)

  $("#input-form").on("submit", function(event) {
    event.preventDefault();
    var problem = {};

    $.each($("#input-form").serializeArray(), function(i, field){
      problem[field.name] = field.value;

    //console.log($(".operators").children(".active").data("operator"));
    });
    problem.operator = $(".operators").children(".active").data("operator");
    console.log(problem);
    sendProblem(problem);

  });

  function newOperator() {
    var operator = ($(this))
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  }

  function sendProblem(problem) {
    var url = '/problem/' + problem.operator
    console.log(problem);
    $.ajax({
      type: 'POST',
      url: url,
      data: problem,
      success: function(response) {
        console.log('post request successful');
        getAnswer()
      },
      error: function() {
        console.log('post failed');
        alert("it didn't work");
      }
    });
  }
  function getAnswer() {
    $.ajax({
      type: 'GET',
      url: '/problem',
      success: function(response) {
        console.log(response);
        $('#answer').empty();
        appendDOM(response);
      }
    })
  }

  function appendDOM(response) {
    console.log(response.answer);
    $('#answer').append('<div class="answer-spot"><p>The answer is: ' + response.answer + '</p></div>');
  }
});
