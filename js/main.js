document.getElementById('map').onclick = function clickEvent(e) {
    // e = Mouse click event.
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    console.log("Left? : " + x + " ; Top? : " + y + ".");

    if (x > 330 && x < 340 && y > 165 && y < 170) {
        window.location.href = "embed.html?video=op3L6dJvgKI"
    }

    if (x > 150 && x < 190 && y > 158 && y < 186) {
        window.location.href = "embed.html?video=hSpQkbcw0TE&autoplay=1"
    }
}