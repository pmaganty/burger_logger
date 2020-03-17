// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    /*$(".change-sleep").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });*/
  
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
  