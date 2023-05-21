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

function validarFormulario() {
    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var dni = document.getElementById('dni').value.trim()
    var birthdate = document.getElementById('birthdate').value.trim()
    var email = document.getElementById('email').value.trim()
    var errores = false;


    if (firstname === '') {
      mostrarError('fristnameError', 'wrong name');
      errores = true;
    } else {
      mostrarError('nombreError', '');
    }

    
    if (lastname === '') {
      mostrarError('lastnameError', 'wrong last name');
      errores = true;
    } else {
      mostrarError('lastnameError', '');
    }

    if (dni === '') {
      mostrarError('dniError', 'wrong dni');
      errores = true;
    } else {
      mostrarError('dniError', '');
    }
    if (birthdate === '') {
      mostrarError('birhtdateError', 'wrong birthdate');
      errores = true;
    } else {
      mostrarError('birthdateError', '');
    }

    if (email === '') {
      mostrarError('emailError', 'wrong email');
      errores = true;
    } else if (!validarEmail(email)) {
      mostrarError('emailError', 'wrong email');
      errores = true;
    } else {
      mostrarError('emailError', '');
    }

    return !errores;
  }

  function mostrarError(elementoId, mensaje) {
    var errorSpan = document.getElementById(elementoId);
    errorSpan.innerText = mensaje;
  }

  function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }