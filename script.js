let url = 'https://mdhbdrqhokhkpwvajvik.supabase.co/rest/v1/Pokedex';
let apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kaGJkcnFob2toa3B3dmFqdmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTQyMTcsImV4cCI6MjA4MDM3MDIxN30.5sjiMRuW3e_F17YtaC38XIVXGszjpCEHGsajCiiAzDI';

async function fetchPokemon() {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "apikey": apikey,
            "Authorization": "Bearer" + apikey
        }
    });

    let data = await response.json();
 let container = document.getElementById("pokemon-container");

    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        container.innerHTML += `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 pokemon-card">
                <img src="${data[i].image_url}" class="card-img-top" alt="${data[i].name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${data[i].name}</h5>
                </div>
            </div>
        </div>
        `;
    }
}
   

fetchPokemon();