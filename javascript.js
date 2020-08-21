
$(document).ready(function () {


    // Date and time displayed on jumbotron > moment().format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = moment().format('dddd MMM Do YYYY');
        document.getElementById("currentDay").innerHTML = currentDate;

    //Calendar time variables
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


        

  // condition to check past, present and future time slots
        if ((i + 7) < moment().hour()) {
			descriptionDiv.attr('class', 'past col-9')
		} else if ((i + 7) === moment().hour()) {
			descriptionDiv.attr('class', 'present col-9')
		} else {
			descriptionDiv.attr('class', 'future col-9')
		}



    // localstorage,getItem() localStorage.setItem() on button click keyword this
        //find item in DOM, set the click function and access local storage 
        // Use keyword this
        // window.localStorage.getItem(this);

        // descriptionDiv.append(schedule);
        
        // document.getElementsByClassName("description").innerHTML = localStorage.getItem(timeSch, schedule);
        // var schedule = localStorage.getItem("description");

        // var storedTodos = JSON.parse(localStorage.getItem("todos"));
        // function storeTodos() {
        //     // Stringify and set "todos" key in localStorage to todos array
        //     localStorage.setItem("todos", JSON.stringify(todos));
        //   }
        // $('data-hour').val(localStorage.getItem(('textarea').val()));

        // $(timeSlots[i]).val(localStorage).getItem(parent().find('textarea').val())

        // document.getElementsByClassName("description").innerHTML = localStorage.getItem(schedule);

        document.getItem.parent().find('textarea').val();


        //     //save button
            buttonEl.click(function(){
            // $(".saveBtn").on("click", function(){
                var schedule = $(this).parent().find('textarea').val();
                var timeSch = $(this).parent().attr('data-hour');
                localStorage.setItem(timeSch, schedule);
            })

        delete button
            btnClr.click(function() {
                var schedule = $(this).parent().find('textarea').val();
                var timeSch = $(this).parent().attr('data-hour');
                localStorage.removeItem(timeSch, schedule);
            });

    }
})




//Check Section 28 of week 4 - Local Storage Todos