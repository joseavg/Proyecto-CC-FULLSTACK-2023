/*------------ Read More and Read Less Buttons of Reviews Page ------------------------*/
let readMoreElements = document.getElementsByClassName ('readMore');
let movieDescriptionElements = document.getElementsByClassName ('description');

/* Counter for changing between elements of the same class*/
for (let i = 0; i < readMoreElements.length; i++) {
    let readMore = readMoreElements[i];
    let movieDescription = movieDescriptionElements[i];


    readMore.addEventListener('click', openText);

    function openText() {
        movieDescription.classList.toggle('open');
    
        if(movieDescription.classList.contains('open')){
            readMore.innerHTML = "Read Less";
        } else {
            readMore.innerHTML = "Read More";
        }
    }
}

/*------------ Read More and Read Less News Button in the Main Grid ------------------*/ 
let readMoreNewsElements = document.getElementsByClassName ('readMoreNews');
let newsParagraphElements = document.getElementsByClassName ('new');

for (let i = 0; i < readMoreNewsElements.length; i++) {
    let readMoreNews = readMoreNewsElements [i]
    let newsParagraph = newsParagraphElements[i];


readMoreNews.addEventListener('click', openText);

    function openText() {
        newsParagraph.classList.toggle('open');
    
        if(newsParagraph.classList.contains('open')){
            readMoreNews.innerHTML = "Read Less";
        } else {
            readMoreNews.innerHTML = "Read More";
        }
    }
}

/*--------------- Form Validation ------------ */

function validarFormulario() {
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var phone = document.getElementById('phone').value;
  var birthdate = document.getElementById('birthdate').value;
  var email = document.getElementById('emailAdress').value;

  if (firstname === "" ||lastname ==="" || phone ==="" ||birthdate === "" ||email ==="" ) {
    alert("Please complete all fields");
    return false;
  }
  if (!isValidPhoneNumber(phone)) {
    alert("Invalid phone number. Please enter a valid phone number.");
    return false;
  }
  if (isToday(birthdate)){
    alert("The birthdate can´t be today´s date")
    return false;
  }
  if (!isValidEmail(email)) {
    alert("The email address is not valid");
    return false;
  }
  //Mostrar mensaje de exito
  alert("¡We have send you and message. Please check yor inbox!");
  return false;
}

function isValidPhoneNumber(phone) {
  var phonePattern = /^\(\d{3}\)\d{4}-\d{4}$/;
  console.log(phonePattern);
  return phonePattern.test(phone);
}
  function isToday(dateString) {
    var today = new Date().toLocaleDateString();
    var selectedDate = new Date(dateString);
    selectedDate.setMinutes(selectedDate.getMinutes() + selectedDate.getTimezoneOffset())
    console.log (today, selectedDate);
    return today ===  selectedDate.toLocaleDateString();
}
    // validar formato de correo
  function isValidEmail(email){
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);

  }
    /*if (!emailRegex.test(email)) {
      alert("The email address is not valid");
      return false;*/
    
    //Envio de correo
    //sendEmail(firstname, email);

   /* function sendEmail(firstname, email) {
     
      email.send({
        Host: "smtp.google.com",
        Username: "cctopratereview",
        Password: "CCFullS2023",
        To: email,
        From: "cctopratereview@gmail.com.",
        Subject: "Welcome",
        Body: "Name: " + firstname + "<br>Email: "+ email
      }).then(function(message) {
        console.log("Correo electrónico enviado correctamente");
    })*/
  // Mostrar mensaje de éxito
  //alert("¡El correo ha sido enviado!");

  // Limpiar el formulario
//document.getElementById("formulario").reset();
//return true;


  
    // Mostrar mensaje de éxito
    //alert("¡El correo ha sido enviado!");

    // Limpiar el formulario
 //document.getElemeys}