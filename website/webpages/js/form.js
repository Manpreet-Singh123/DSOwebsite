function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "frmsrciiser@gmail.com",
        Password : "A1C4446117EA54BDBA895C785A946F81BC12",
        To : 'singhmanpreet10918@gmail.com',
        From : "frmsrciiser@gmail.com",
        Subject : "New Contact form Enquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfuly")
    );
}
A1C4446117EA54BDBA895C785A946F81BC12