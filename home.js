

const scrollButton = document.getElementById("scrollButton");


//change visibility of button based on location
window.onscroll = function(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";  // Show button
    } else {
        scrollButton.style.display = "none";   // Hide button
    }
}


//scroll back up when pressed
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}





