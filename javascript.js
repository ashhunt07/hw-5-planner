
$(document).ready(function () {

    var movie = $(this).attr("data-name");


        // var currentDate = require ('moment'); moment().format('dddd', "MMM Do YY");
        // $("#currentDay").append(currentDate);

        var currentDate = moment().format('dddd MMM Do YYYY');
        document.getElementById("currentDay").innerHTML = currentDate;

    
    var timeSlots=['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm',]


    for(var i = 0; i < timeSlots.length; i++) {
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var descriptionDiv = $("<textarea>");
        var buttonEl = $ ("<button>")
        var iconEl = $("<i>")

        newDiv.attr('data-hour', timeSlots[i]);
        newDiv.attr('class', 'row');

        descriptionDiv.attr('class', 'description col-10')
        timeDiv.attr('class', 'hour col-1')
        buttonEl.attr('class', 'saveBtn col-1');
        iconEl.attr('class', 'far fa-save')


        $(".container").append(newDiv);
        
        newDiv.append(timeDiv);
        newDiv.append(descriptionDiv);
        newDiv.append(buttonEl);
        buttonEl.append(iconEl);
        
        timeDiv.text(timeSlots[i]);


        var currentTime = moment().format('h:mm');
        console.log(currentTime);
        // if (currentTime = )


    }
    
    
    

})

// condition to check past, present and future time slots
// Date and time displayed on jumbotron > moment().format('MMMM Do YYYY, h:mm:ss a');
// localstorage,getItem() localStorage.setItem() on button click keyword this
    //find item in DOM, set the click function and access local storage 
    // Use keyword this
//console log to test as you go

//everything has to be seen on refresh



//Check Section 28 of week 5 - Local Storage Todos