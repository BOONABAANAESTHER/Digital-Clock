function showTime(){
    var date = new Date();
    //These lines extract the current hour, minute, and second components from the Date object.
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    //This line checks if the hour (h) is equal to 0 (midnight).
    // If so, it sets h to 12, representing 12 AM.
    if(h == 0){
        h = 12;
    }
    
    //This line checks if the hour (h) is greater than 12 (after noon). If so, 
    //it subtracts 12 from h and sets the session variable to "PM".
    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    //ternary operator
    //These lines add leading zeros to the hour (h), minute (m), 
    //and second (s) variables if they are less than 10.
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //This line constructs a string time containing the
    // formatted time in the format "hh:mm:ss AM/PM".
    
    var time = h + ":" + m + ":" + s + " " + session;

    //These lines update the text content of an HTML element with the id attribute 
    //"MyClockDisplay" to display the formatted time.

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    //this line sets a timeout to call the showTime function again after 1000 milliseconds (1 second), creating a continuous
    // loop to update the displayed time every second.
    
    setTimeout(showTime, 1000);
    
}

showTime();

