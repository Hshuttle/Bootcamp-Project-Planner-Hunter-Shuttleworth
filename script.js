$(document).ready(function () {
  // Start of for loop to generate timeblocks with correct formatting
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
  }
});
