//Variable declaration 
const fourGrid = document.getElementById('fourGrid');

document.addEventListener('DOMContentLoaded', main);
function main() {
    displayCountries();
}
function displayCountries() {
    
    fetch('http://localhost:3000/countries')
    .then(response => response.json())
    .then( data => data.forEach( country => {
        let countryCard = document.createElement('div');
        countryCard.classList.add('small-card');
        countryCard.innerHTML = `
            <div class="small-card">
                <div class="small-card-image"><img src="${country.Image}" alt="${country.Dish}"></div>
                <div class="small-card-content">
                    <h4>${country.Dish}</h4>
                    <div class="flag"><img src="${country.Flag}"></div><div class="location"><h4>${country.Country}, ${country.Continent}</h4></div>
                    <p>${country.Description}</p>
                </div>
                <div class="ratings">
                    <span class="star" data-value="1">★</span>
                    <span class="star" data-value="2">★</span>
                    <span class="star" data-value="3">★</span>
                    <span class="star" data-value="4">★</span>
                    <span class="star" data-value="5">★</span>
                </div>
                <button class="card-button">Rate & Comment</button>
            </div>
        `
        fourGrid.appendChild(countryCard);
    }
    ))
    .catch(error => countryCard.innerText = `Error: ${error}`);
}