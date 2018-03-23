function SwapDivsWithClick(div1, div2) {
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display == "none") {
        d1.style.display = "none";
        d2.style.display = "flex";
    }
    else {
        d1.style.display = "flex";
        d2.style.display = "none";
    }
}
function Greeting() {
    var x = document.getElementById("greet");
    var userResponse = prompt('Welcome to the Wardrobe. What is your name?');
    x.getElementsByTagName('h1')[0].innerText = 'Welcome to the Wardrobe, ' + userResponse;
}
function Print() {
    var printCon = confirm("Are you sure you want to print this page?");

}
function HideWithClick(div1) {
    d1 = document.getElementById(div1);
    var userCon = confirm('Do you want to remove this box?')
    if (userCon) {
        d1.style.display = "none";
    }
    else {
        d1.style.display = "flex";
    }
}

function TextHighlight(x) {
    
        x.style.fontSize = "xx-large";
        x.style.color = "yellow";
}
function TextUnHighlight(x) {
    x.style.fontSize = "x-large";
    x.style.color = "inherit";
}
function Redirect(x) {
    var confirmButton = document.getElementById(x);
    var userResponse = confirm('You are about to leave this site. If you want to stay, please select cancel.');
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    //alert(userResponse); //troubleshooting application
    if (userResponse) {
        var win = window.open("http://www.dappered.com", '_blank');
        win.focus();
    }
}