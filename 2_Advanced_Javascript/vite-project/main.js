fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
    .then(response => {
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(({results}) => {
        results.map((pokemon) => {
            let imageUrl = `./${pokemon.name}.png`;
            document.querySelector('#app').insertAdjacentHTML('beforeend', `
            <div class="card">
    <div class="card-image">
        <figure class="image is-4by3">
            <img src="${imageUrl}" alt="Placeholder image"/>
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">${pokemon.name}</p>
                <a href="${pokemon.url}">Description</a>
            </div>
        </div>
        <div class="content">
        <p>This is a preview of a RESTful Pokémon API</p>
            <a>@bulmaCSS</a>.
            <br />
            <time datetime="2024-04-23">23 April 2024</time>
        </div>
    </div>
</div>`);
        })
    })
    .catch(e => {
        console.error('An error occurred while fetching the data.', e);
    })




