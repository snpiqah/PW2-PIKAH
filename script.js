
$(document).on("pagecreate", "#registrationPage", function() {
    
    $("#regForm").on("submit", function(event) {
        event.preventDefault(); 
        
        var age = parseInt($("#umur").val());
        var message = "";

       
        if (isNaN(age)) {
            message = "Sila masukkan umur yang sah.";
        } 
       
        else if (age < 13) {
            message = "Participant is not eligible to register for the event.";
        } 
     
        else if (age >= 13 && age <= 17) {
            message = "Participant must be accompanied by a parent or guardian.";
        } 
       
        else if (age >= 18 && age <= 40) {
            message = "Participant is eligible to participate in all event activities.";
        } 
       
        else if (age >= 41 && age <= 60) {
            message = "Participant is eligible to participate but is advised to choose suitable activities.";
        } 
    
        else {
            message = "Participant is welcome to join the event but is advised to participate in light activities only.";
        }
        $("#popupMessage").text(message);
        $("#agePopup").popup("open");
    });
});