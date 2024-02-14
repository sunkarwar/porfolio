function onSubmitMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const div = document.getElementById("div_recommendations");
    document.getElementById("popUp").style.display="block";
    div.innerHTML += `<div id="div_msg"> <p>"${message}"` + (name ? ` - ${name} </p></div>` :  `</p></div>`);
   
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function turnOff() {
    document.getElementById("popUp").style.display="none";
}