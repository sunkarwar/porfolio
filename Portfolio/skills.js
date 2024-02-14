function onSubmitMessage() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const div = document.getElementById("div_recommendations");
    div.style.display= "block";
    div.innerHTML += `<div id="div_msg"> <p>"${message}"` + (name ? ` - ${name} </p></div>` :  `</p></div>`);
    alert("Thank you for submitting a recommendation!");
}