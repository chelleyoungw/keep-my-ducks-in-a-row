// All code that interacts with the DOM in a call to jQuery in the following 
// function. Makes sure the code isn't run until the browser is done rendering html.
$(function() {

// Adds time and date to the top of the screen.
  var time = dayjs().format('hh:mmA');
  var date = dayjs().format('dddd, MMMM D, YYYY')
  $('#currentDay').text(date + " | " + time);


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