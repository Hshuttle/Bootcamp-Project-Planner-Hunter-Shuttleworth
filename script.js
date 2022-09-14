$(document).ready(function () {
  // Start of for loop to generate time blocks with correct formatting
  for (var i = 8; i <= 22; i++) {
    // sets the color based on time
    var color = "";
    var moment = new Date().getHours();
    console.log(moment);
    if (i < moment) {
      color = "past";
    } else if (i === moment) {
      color = "present";
    } else {
      color = "future";
    }
    var hourDisplay = "";
    if (i < 12) {
      hourDisplay = i + " AM";
    } else if (i === 12) {
      hourDisplay = "NOON";
    } else {
      hourDisplay = i - 12 + " PM";
    }
    // row class to set column width
    var row = $("<section>").addClass("row").attr("id", i);
    var hourDiv = $("<div>").addClass("col-1 hourDisplay").text(hourDisplay);
    // text area to type in to do tasks
    var textArea = $("<textarea>")
      .addClass("col-9 description " + color)
      .val(localStorage.getItem(i));
    //   create save button
    var saveButton = $("<button>")
      .addClass("saveBtn col-1")
      //   saves to local storage
      .on("click", function () {
        var hour = $(this).parent().attr("id");
        var activity = $(this).siblings(".description").val();
        localStorage.setItem(hour, activity);
      });
    // trash button functionality
    var trashButton = $("<button>")
      .addClass("trashBtn col-1")
      //   saves to local storage
      .on("click", function () {
        var hour = $(this).parent().attr("id");
        var emptySpace = $(this).siblings(".description").val("");
        localStorage.setItem(hour, emptySpace);
      });
    //   save saveIcon from font awesome
    var saveIcon = $("<i>").addClass("fas fa-save");
    var trashIcon = $("<li>").addClass("fas fa-trash");
    // adding all variables to the container
    $(".container").append(
      row.append(
        hourDiv,
        textArea,
        saveButton.append(saveIcon),
        trashButton.append(trashIcon)
      )
    );
  }
});
