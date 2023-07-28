//sticky navbar

let header = document.querySelector('header') ;
header.classList.toggle('sticky', window.scrollY > 100);

// //scroll reveal

// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duratiom: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

//contact me working (sending email)
function send_email(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "oproironn@gmail.com",
        Password : "0233DBF98E21186FD3C3B8F57A4CFF0DAD9E",
        To : 'aaryandps42@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("sub").value,
        Body : "Name: "+ document.getElementById("name").value
            +   "<br> Email: "+ document.getElementById("email").value
            +   "<br> Ph Number: "+ document.getElementById("number").value
            +   "<br> Subject: "+ document.getElementById("sub").value
            +   "<br> Message: "+ document.getElementById("msg").value
    }).then(
      message => alert('Message sent successfully')
    );
}

//filter buttons
function filterObjects(c){
    var x,i ;
    x = document.getElementsByClassName("tools-box") ;
    
}