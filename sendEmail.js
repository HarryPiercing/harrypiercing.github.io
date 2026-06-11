// console.log("script SendEmail");
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        number : document.getElementById("number").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_la6ckwr", "template_a7ecci9", parms).then(alert("Email Sent."));
}

// console.log(parms);