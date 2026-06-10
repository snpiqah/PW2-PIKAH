$(document).on("pagecreate", "#registration-page", function() {
    

    $("#btn-hantar").on("click", function() {
        
        
        var umurInput = $("#txt-umur").val();

       
        if (umurInput === "") {
            alert("Sila isi ruangan umur yang wajib!");
            return; 
        }

        var umur = parseInt(umurInput);
        var mesej = "";

        if (umur < 13) {
            mesej = "Participant is not eligible to register for the event.";
        } 
        else if (umur >= 13 && umur <= 17) {
            mesej = "Participant must be accompanied by a parent or guardian.";
        } 
        else if (umur >= 18 && umur <= 40) {
            mesej = "Participant is eligible to participate in all event activities.";
        } 
        else if (umur >= 41 && umur <= 60) {
            mesej = "Participant is eligible to participate but is advised to choose suitable activities.";
        } 
        else if (umur > 60) {
            mesej = "Participant is welcome to join the event but is advised to participate in light activities only.";
        }

        // Paparkan amaran popup
        alert(mesej);
    });
});