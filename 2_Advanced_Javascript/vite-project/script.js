document.querySelector("nav").innerHTML = `
 <div class="navbar-brand">
        <a class="navbar-item" href="https://pokeapi.co/">
            <figure>
                <img src="/public/Pokémon.png" alt="Pokemon-logo">
            </figure>
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">
                Home
            </a>
            <a class="navbar-item">
                Videogiochi
            </a>
            <a class="navbar-item">
                Animazione
            </a>
            <a class="navbar-item">
                Novità
            </a>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>
`

document.querySelector("footer").innerHTML = `
  <div class="mx-auto max-w-7xl px-2 py-2 is-overflow-hidden">
        <div class="mt-10 is-flex is-justify-content-center p-3 is-gap-5">
            <a href="https://facebook.com" class="has-text-grey">
                <span class="is-sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="30px" height="30px">
                    <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"/>
                </svg>
            </a>
            <a href="https://instagram.com" class="has-text-grey">
                <span class="is-sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width="30px" height="30px">
                    <path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"/>
                </svg>
            </a>
            <a href="https://github.com/Denel91" class="has-text-grey">
                <span class="is-sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="30px" height="30px">
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                </svg>
            </a>
            <a href="" class="has-text-grey">
                <span class="is-sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="30px" height="30px">
                    <path fill-rule="evenodd" d="M 13 5 L 16 14 L 16 20 L 18 20 L 18 14 L 21 5 L 19 5 L 17 11 L 15 5 Z M 24 9 C 22.933594 9 22.410156 9.167969 21.757813 9.703125 C 21.132813 10.230469 20.960938 10.636719 21 12 L 21 17 C 21 17.996094 21.164063 18.652344 21.765625 19.234375 C 22.390625 19.816406 22.980469 20 24 20 C 25.066406 20 25.648438 19.816406 26.25 19.234375 C 26.875 18.675781 27 17.996094 27 17 L 27 12 C 27 11.117188 26.84375 10.28125 26.238281 9.722656 C 25.613281 9.148438 24.96875 9 24 9 Z M 29 9 L 29 18 C 29 18.972656 29.980469 20 31 20 C 32.019531 20 32.558594 19.488281 33 19 L 33 20 L 35 20 L 35 9 L 33 9 L 33 17 C 32.988281 17.683594 32.183594 18 32 18 C 31.792969 18 31 17.957031 31 17 L 31 9 Z M 24 11 C 24.300781 11 25 10.996094 25 12 L 25 17 C 25 17.96875 24.324219 18 24 18 C 23.699219 18 23 17.988281 23 17 L 23 12 C 23 11.183594 23.433594 11 24 11 Z M 25.457031 21.921875 C 20.414063 21.910156 15.375 21.921875 10.332031 22 C 9.652344 22.019531 8.972656 22.117188 8.324219 22.328125 C 7.800781 22.503906 7.300781 22.746094 6.847656 23.0625 C 6.3125 23.4375 5.851563 23.910156 5.492188 24.453125 C 5.238281 24.832031 5.035156 25.246094 4.882813 25.675781 C 4.632813 26.367188 4.519531 27.097656 4.5 27.828125 C 4.449219 31.109375 4.449219 34.390625 4.5 37.671875 C 4.519531 38.296875 4.601563 38.914063 4.765625 39.519531 C 5.082031 40.660156 5.6875 41.726563 6.570313 42.527344 C 6.824219 42.757813 7.097656 42.964844 7.390625 43.144531 C 7.75 43.367188 8.136719 43.550781 8.539063 43.6875 C 9.117188 43.882813 9.722656 43.980469 10.332031 44 C 20.441406 44.1875 30.558594 44.15625 40.667969 44 C 41.347656 43.980469 42.027344 43.882813 42.675781 43.671875 C 43.199219 43.496094 43.699219 43.253906 44.152344 42.9375 C 44.6875 42.5625 45.148438 42.089844 45.511719 41.546875 C 45.761719 41.167969 45.964844 40.753906 46.121094 40.324219 C 46.367188 39.632813 46.480469 38.902344 46.5 38.171875 C 46.550781 34.753906 46.515625 31.332031 46.5 27.917969 C 46.488281 27.179688 46.382813 26.441406 46.140625 25.746094 C 45.996094 25.3125 45.796875 24.894531 45.546875 24.511719 C 45.195313 23.964844 44.738281 23.484375 44.210938 23.105469 C 43.742188 22.765625 43.222656 22.507813 42.675781 22.328125 C 42 22.109375 41.292969 22.011719 40.582031 22 C 35.542969 21.976563 30.5 21.933594 25.457031 21.921875 Z M 33.09375 23.9375 C 35.605469 23.941406 38.117188 23.960938 40.625 24 C 41.023438 24.011719 41.421875 24.058594 41.808594 24.15625 C 42.429688 24.320313 43.015625 24.628906 43.464844 25.089844 C 43.617188 25.246094 43.75 25.414063 43.871094 25.597656 C 44.039063 25.859375 44.171875 26.144531 44.265625 26.441406 C 44.421875 26.902344 44.484375 27.386719 44.5 27.875 C 44.550781 31.292969 44.550781 34.710938 44.5 38.125 C 44.484375 38.613281 44.421875 39.097656 44.265625 39.558594 C 44.171875 39.855469 44.039063 40.140625 43.871094 40.402344 C 43.75 40.585938 43.617188 40.753906 43.464844 40.910156 C 43.015625 41.371094 42.429688 41.679688 41.808594 41.84375 C 41.421875 41.941406 41.023438 41.988281 40.625 42 C 30.566406 42.15625 20.503906 42.0625 10.441406 42 C 10.011719 41.992188 9.589844 41.929688 9.179688 41.792969 C 8.921875 41.703125 8.671875 41.585938 8.441406 41.441406 C 8.253906 41.328125 8.074219 41.195313 7.914063 41.046875 C 7.296875 40.484375 6.890625 39.730469 6.679688 38.933594 C 6.566406 38.507813 6.515625 38.066406 6.5 37.625 C 6.449219 34.398438 6.484375 31.167969 6.5 27.9375 C 6.507813 27.445313 6.570313 26.957031 6.71875 26.488281 C 6.8125 26.1875 6.941406 25.902344 7.109375 25.636719 C 7.230469 25.441406 7.375 25.253906 7.535156 25.089844 C 8 24.613281 8.601563 24.304688 9.242188 24.144531 C 9.65625 24.042969 10.082031 24.003906 10.503906 24 C 18.035156 24 25.566406 23.914063 33.09375 23.9375 Z M 11 26 L 11 28 L 13 28 L 13 40 L 15 40 L 15 28 L 17 28 L 17 26 Z M 26 26 L 26 40 L 28 40 L 28 39 C 28.386719 39.449219 28.949219 40.011719 30 40 C 30.621094 39.992188 31.101563 39.492188 31.421875 39.097656 C 31.75 38.703125 32 38.242188 32 37.5 L 32 31.5 C 32 30.636719 31.726563 30.050781 31.378906 29.609375 C 31.03125 29.171875 30.523438 28.9375 29.875 28.9375 C 29.546875 28.9375 29.222656 29.03125 28.902344 29.195313 C 28.574219 29.355469 28.230469 29.640625 28 30 L 28 26 Z M 18 29 L 18 38 C 18 38.625 18.269531 38.933594 18.5 39.234375 C 18.757813 39.5625 19.308594 40 19.792969 40 C 20.183594 40 20.605469 40.015625 21.019531 39.78125 C 21.4375 39.574219 21.628906 39.4375 22 39 L 22 40 L 24 40 L 24 29 L 22 29 L 22 37 C 21.820313 37.234375 21.8125 37.992188 21 38 C 20.269531 38.007813 20 37.230469 20 37 L 20 29 Z M 36.199219 29 C 35.25 29 34.371094 29.230469 33.902344 29.710938 C 33.320313 30.308594 33.003906 30.980469 33.003906 31.886719 L 33.003906 36.59375 C 33.003906 37.613281 33.28125 38.40625 33.8125 38.984375 C 34.34375 39.5625 35.085938 39.84375 36.035156 39.84375 C 37.074219 39.84375 37.867188 39.585938 38.375 39.027344 C 38.914063 38.496094 39 37.683594 39 36.59375 L 39 36 L 37 36 L 37 36.5 C 37 37.101563 36.941406 37.566406 36.800781 37.730469 C 36.664063 37.914063 36.40625 37.996094 36 38 C 35.632813 38.003906 35.355469 37.902344 35.21875 37.671875 C 35.074219 37.460938 35 37.105469 35 36.546875 L 35 35 L 39 35 L 39 31.886719 C 39 30.886719 38.835938 30.265625 38.320313 29.734375 C 37.816406 29.203125 37.148438 29 36.199219 29 Z M 29 30.5 C 29.550781 30.5 30 31 30 32 L 30 37.023438 C 30 37.574219 29.550781 38 29 38 C 28.449219 38 28.007813 37.789063 28 37.5 L 28 31.5 C 28.007813 30.996094 28.449219 30.5 29 30.5 Z M 36 31 C 36.550781 31 37 31.386719 37 32 L 37 33 L 35 33 L 35 32 C 35.007813 31.464844 35.449219 31 36 31 Z"/>
                </svg>
            </a>
        </div>
        <p class="has-text-centered is-size-8 mt-5 has-text-black-15">&copy; 2024 Daniele Di Salvo, All rights reserved.</p>
    </div>
`