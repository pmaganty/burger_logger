// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBtn").on("click", function(event) {
      console.log("IN CLASS CLICK FUNCTION"); //FOR DEBUG
      var burger = $(this).data("burger");
      console.log(burger); //FOR DEBUG
      //var newSleep = $(this).data("newsleep");
  
      var newEatState = {
        burger_name: burger
      };

      //console.log($this); //FOR DEBUG
      //$(this).data('burger').remove();
  
      // Send the PUT request.
      $.ajax("/index", {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          //console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submitBtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      console.log("INSIDE CLICK FUNCTION"); //FOR DEBUG
  
      var newBurger = {
        burger_name: $("#userInput").val().trim()
      };

      console.log(newBurger.burger_name); //FOR DEBUG
  
      // Send the POST request.
      $.ajax("/index", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger"); //FOR DEBUG
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  