/* Botón Read More and Read Less */
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

