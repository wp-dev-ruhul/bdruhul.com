const form = document.getElementById('contactForm');

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("Subject");
const message = document.getElementById("Message");

function sendEmail(){
    const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "wp.dev.ruhul@gmail.com",
        Password : "17A18AFE41AE2D0A46F83AE1E0D07147EB26",
        To : 'wp.dev.ruhul@gmail.com',
        From : "wp.dev.ruhul@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
