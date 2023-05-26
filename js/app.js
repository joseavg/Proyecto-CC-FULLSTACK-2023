/* Load Movies from the API of TMDB to the premieres class at the main page */
const loadMovies = async() => {
    
    try {
        /* Load an API from TMDB website */
    const answer = await fetch ('https://api.themoviedb.org/3/movie/upcoming?api_key=1b2105fd0ca73f4b0c322e5beba49e9b');

    if(answer.status === 200){
        const data = await answer.json();
        /* List of objects */
        /* console.log(data.results); */

        /* Titles and poster links like and array */
        const movieTitles = data.results.map(movie => movie.title);
        const moviePosters = data.results.map(movie => movie.poster_path);

        /* console.log(moviePosters) */
        /* console.log(movieTitles) */ 

        let premiereTitleElements = document.getElementsByClassName ('premiere-title');
        let premiereImgElements = document.getElementsByClassName ('premiere-img')
        for (let i = 0; i < premiereTitleElements.length; i++) {
        let premiereTitle = premiereTitleElements[i];
        let premiereImg = premiereImgElements[i]
        const altTexts = movieTitles[i].replace(/\s+/g, '_');
        
        /* console.log(premiereImg.attributes); */
        /* console.log(altTexts); */

        /* Replace the tittle */
        premiereTitle.textContent=movieTitles[i]
        /* Replace src, title and alt attributes for the new image */
        premiereImg.setAttribute("src","https://image.tmdb.org/t/p/w500"+moviePosters[i])
        premiereImg.setAttribute("title",movieTitles[i])
        premiereImg.setAttribute("alt",altTexts[i])
        }

    } else if(answer.status === 401){
        console.log('You have an incorrect key')
    } else if(answer.status === 404){
        console.log('The movie doesnt exist')
    } else {
        console.log('Undetermined error')
    }

    
    } catch(error) {
        console.log(error);
    }
}

loadMovies()

/* Solution to sticky titles overlap */

let scrollTitles = document.getElementsByClassName('scroll-title');

      for (let i = 1; i < scrollTitles.length; i++) {
          let newScrollTitle = scrollTitles[i];
          let oldScrollTitle = scrollTitles[i-1];

          /* Scroll event listener to the window */
          window.addEventListener('scroll', function() {
          /* Scroll position */
          const scrollWindowTop = window.pageYOffset || document.documentElement.scrollTop;

          /* Identifying when the new scroll title is at the top os the window */
          const scrollTitleTop = newScrollTitle.offsetTop;

          if (scrollTitleTop <= scrollWindowTop) {
            oldScrollTitle.style.display = 'none';
          } else {
            oldScrollTitle.style.display = 'block';
          }
        });
      }


/* Flechas Scroll-Premieres */
const premieresScroll = document.querySelector('.premieres');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);

function scrollLeft() {
  premieresScroll.scrollBy({
    left: -200,
    behavior: 'smooth'
  });
}

function scrollRight() {
  premieresScroll.scrollBy({
    left: 200,
    behavior: 'smooth'
  });
}


/* const premieresScroll = document.querySelector('.premieres');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', scrollLeft);
rightArrow.addEventListener('click', scrollRight);

function scrollLeft() {
  premieresScroll.scrollBy({
    left: -premieresScroll.clientWidth,
    behavior: 'smooth'
  });
}

function scrollRight() {
  premieresScroll.scrollBy({
    left: premieresScroll.clientWidth,
    behavior: 'smooth'
  });
} */
