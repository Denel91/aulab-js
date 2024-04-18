fetch('https://swapi.dev/api/films')
    .then((response) => response.json())
    .then(({results}) => createList(results))
    .finally(() => {
        let loaderElement = document.querySelector('.loader');
        if(loaderElement) loaderElement.style.display = 'none';
    })


const createList = (films) => {
    const list = films.map((film) => `<li>${film.title}</li>`).join(" ");
    document.querySelector('.list').innerHTML = `<ul>${list}</ul>`;
};
