


emailjs.init("Yp97XZouaOMeukd1x");

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_c0f5guq",
    "template_v6eza8h",
    this
  );

  alert("Message sent!");

  this.reset();

});


//service_c0f5guq -- sevice id

//template_id -- template_v6eza8h

//Yp97XZouaOMeukd1x public key