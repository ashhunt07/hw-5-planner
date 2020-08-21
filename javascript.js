
$(document).ready(function () {

    var currentDate = moment().format('dddd MMM Do YYYY');
        document.getElementById("currentDay").innerHTML = currentDate;

    var timeSlots=['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm',]


    for(var i = 0; i < timeSlots.length; i++) {
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var descriptionDiv = $("<textarea>");
        var buttonEl = $("<button>");
        var btnClr = $("<button>");
    
    //icon variables
        var iconEl = $("<i>");
        var clearEl = $("<i>");
        

        newDiv.attr('data-hour', timeSlots[i]);
        newDiv.attr('class', 'row');
    
        descriptionDiv.attr('class', 'description col-9');
        timeDiv.attr('class', 'hour col-1');
        buttonEl.attr('class', 'saveBtn col-1');
        btnClr.attr('class', 'clearBtn col-1');
        
    //button icon attrubutes
        iconEl.attr('class', 'far fa-save');
        clearEl.attr('class', 'fas fa-eraser');


        $(".container").append(newDiv);
        
        newDiv.append(timeDiv);
        newDiv.append(descriptionDiv);
        newDiv.append(buttonEl);
        newDiv.append(btnClr);
        
        //append button icons
        buttonEl.append(iconEl);
        btnClr.append(clearEl);
        
        timeDiv.text(timeSlots[i]);



  //Sets the columns to change color according to time
        if ((i + 7) < moment().hour()) {
			descriptionDiv.attr('class', 'past col-9')
		} else if ((i + 7) === moment().hour()) {
			descriptionDiv.attr('class', 'present col-9')
		} else {
			descriptionDiv.attr('class', 'future col-9')
		}



        // // Save to local storage
        // var loadData = localStorage.getItem.val(schedule);
        // descriptionDiv.append(loadData);


        //     //save button
            buttonEl.click(function(){
                var schedule = $(this).parent().find(".description").val();
                var timeSch = $(this).parent().attr("data-hour");
                localStorage.setItem(timeSch, schedule);
            })

        // delete button
            btnClr.click(function() {
            localStorage.removeItem(timeSch, schedule).val();
            });
        

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