/* Botón Read More and Read Less de Reviews*/
let readMoreElements = document.getElementsByClassName ('readMore');
let movieDescriptionElements = document.getElementsByClassName ('description');

/* Contador para ir cambiando entre los elementos de la misma clase, permitiendo que funcione el botón*/
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

/* Si no hago el for anterior, iba a tener que cambiar a mano todos los nombres de ID en el HTML, ya que son 
únicos y tambien copiar y pegar el script con los ID cambiados uno por uno  */

/* let readMore2 = document.getElementById ('readMore2');
let movieDescription2 = document.getElementById ('movieDescription2');

readMore2.addEventListener('click', openText2);

function openText2() {
    movieDescription2.classList.toggle('open');

    if(movieDescription2.classList.contains('open')){
        readMore2.innerHTML = "Read Less";
    } else {
        readMore2.innerHTML = "Read More";
    }
} */

/* Botón Read More and Read Less de News del Main Grid*/ 
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

/* Validar Formulario */

function validarFormulario() {
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var phone = document.getElementById('phone').value;
  var birthdate = document.getElementById('birthdate').value;
  var email = document.getElementById('emailAdress').value;

  if (firstname === "" ) {
    alert("Please completed the Name fild");
    return false;
  }
  if (lastname === "" ) {
    alert("Please completed the Last Name fild");
    return false;
  }
  if (phone === "" ) {
    alert("Please completed the Phone Number fild");
    return false;
  }
  if (birthdate === today ) {
    alert("The date is invalid");
    return false;
  }
  if (email === "") {
    alert("The E-Mail is not valid");
    return false;
  }
    // validar formato de correo
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("The email is not valid");
      return false;
    }
  // Mostrar mensaje de éxito
  alert("¡El correo ha sido enviado!");

  // Limpiar el formulario
//document.getElementById("formulario").reset();
return true;
}
  function sendEmail(firstname, email) {
    // Aquí puedes agregar tu lógica para enviar el correo electrónico
    // Esto puede implicar el uso de un servicio de backend o una API de envío de correo electrónico
  
    // Ejemplo de código para enviar el correo electrónico usando el servicio 'smtpjs'
    email.send({
      Host: "smtp.google.com",
      Username: "cctopratereview",
      Password: "CCFullS2023",
      To: email,
      From: "cctopratereview@gmail.com.",
      Subject: "Welcome",
      Body: "Nombre: " + firstname + "<br>Email: " + email
    }).then(function(message) {
      alert("Correo electrónico enviado correctamente");
      // Aquí puedes agregar cualquier otra lógica adicional después de enviar el correo electrónico
    });
     }
    // Mostrar mensaje de éxito
    //alert("¡El correo ha sido enviado!");

    // Limpiar el formulario
 //document.getElementById("formulario").reset();
  //return true;