// All code that interacts with the DOM in a call to jQuery in the following 
// function. Makes sure the code isn't run until the browser is done rendering html.
$(function() {
  
  // For loop that creates a time, text area, and save button for every
  // hour from 9am-5pm.
  for(var i=9; i<=17; i++){
    var hourDiv = document.createElement("div");
    hourDiv.id = "hour-" + i;
    hourDiv.setAttribute("class", "row time-block past");

    var hourLabel = document.createElement("div");
    hourLabel.textContent = timeChange(i);
    hourLabel.setAttribute("class", "col-2 col-md-1 hour text-center py-3");

    var textArea = document.createElement("textArea");
    textArea.setAttribute("class", "col-8 col-md-10 description");
    textArea.setAttribute("rows", "3");

    var saveButton = document.createElement("button");
    saveButton.setAttribute("class", "btn saveBtn col-2 col-md-1");

    var saveIcon = document.createElement("i");
    saveIcon.setAttribute("class", "fas fa-save");

    saveButton.append(saveIcon);
    hourDiv.append(hourLabel, textArea, saveButton);
    $(".container-lg.px-5").append(hourDiv);
  }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Changes time from 24hr to am and pm.
function timeChange(militaryTime) {
  var civilianTime = militaryTime;
  var meridiem = "AM";

  // Checking if post meridiem, PM (after midday).
  if (militaryTime >= 12) {
    meridiem = "PM";
  }

  //Changing military time to civilian time.
  if (militaryTime >=13) {
    civilianTime = militaryTime - 12;
  }
  return civilianTime + meridiem;
} 