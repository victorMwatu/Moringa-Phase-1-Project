//Variable declaration 
const fourGrid = document.getElementById('fourGrid');
const API_URL = "https://worldflavors.onrender.com/countries";

document.addEventListener('DOMContentLoaded', main);

function main() {
    displayCountries();
}
function renderCountryCards(countryArray) {
  fourGrid.innerHTML = ''; 

  countryArray.forEach(country => {
    const countryCard = document.createElement('div');
    countryCard.classList.add('small-card');
    countryCard.setAttribute('data-id', country.id); 

    countryCard.innerHTML = `
      <div class="small-card-image"><img src="${country.Image}" alt="${country.Dish}"></div>
      <div class="small-card-content">
          <h4>${country.Dish}</h4>
          <div class="flag"><img src="${country.Flag}"></div>
          <div class="location"><h4>${country.Country}, ${country.Continent}</h4></div>
          <p>${country.Description}</p>
      </div>
      <div class="card-bottom">
          <div class="ratings">
              <span class="star" data-value="1">★</span>
              <span class="star" data-value="2">★</span>
              <span class="star" data-value="3">★</span>
              <span class="star" data-value="4">★</span>
              <span class="star" data-value="5">★</span>
          </div>
          <button class="card-button"> 💬 Comment</button>
          <a href="${country['Recipe Link']}" target="_blank" class="card-button">📖 Recipe Link</a>
      </div>
      <div class="comment-section" tabindex="0">
          <div class="comment-list"></div>
          <div class="comment-input">
              <input type="text" class="comment-name" placeholder="Your name" />
              <textarea class="comment-text" rows="2" placeholder="Your comment..."></textarea>
              <button class="submit-comment card-button">Post</button>
              
          </div>
      </div>
    `;

    fourGrid.appendChild(countryCard);
  });

  // Rebind interactive features to the new elements
  handleRatings();
  handleComments();
}


//Display country cards
function displayCountries() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      renderCountryCards(data);
    })
    .catch(err => {
      console.error("Error loading countries:", err);
    });
}

//handling comments
function handleComments() {
    //Open the comment section and load existing comments
  document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.small-card');
      const commentSection = card.querySelector('.comment-section');
      const countryId = card.dataset.id; // e.g., "1"

      commentSection.style.display = 'flex';
      commentSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      commentSection.focus();

      // Fetch country by ID
      fetch(`${API_URL}/${countryId}`)
        .then(res => res.json())
        .then(data => {
          const list = commentSection.querySelector('.comment-list');
          list.innerHTML = ''; // Clear old comments

          if (Array.isArray(data.comments)) {
            data.comments.forEach(c => {
              const div = document.createElement('div');
              div.innerHTML = `<strong>${c.name}:</strong> ${c.comment}`;
              list.appendChild(div);
            });
          }
        });
    });
  });
//Hide comment section when user clicks away
document.addEventListener('click', (e) => {
  document.querySelectorAll('.comment-section').forEach(section => {
    const card = section.closest('.small-card');
    if (!card.contains(e.target)) {
      section.style.display = 'none';
    }
  });
});

  //Handle comment submission
  document.querySelectorAll('.submit-comment').forEach(button => {
    button.addEventListener('click', () => {
      const section = button.closest('.comment-section');
      const nameInput = section.querySelector('.comment-name');
      const textInput = section.querySelector('.comment-text');
      const list = section.querySelector('.comment-list');
      const card = button.closest('.small-card');
      const countryId = card.dataset.id;

      const name = nameInput.value.trim();
      const commentText = textInput.value.trim();

      if (!name || !commentText) return;

      const newComment = { name, comment: commentText };

      // Get current comments for this country
      fetch(`${API_URL}/${countryId}`)
        .then(res => res.json())
        .then(data => {
          const updatedComments = Array.isArray(data.comments) ? [...data.comments, newComment] : [newComment];

          // PATCH to update the comments array
          return fetch(`${API_URL}/${countryId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comments: updatedComments })
          });
        })
        .then(() => {
          // Update UI
          const div = document.createElement('div');
          div.innerHTML = `<strong>${name}:</strong> ${commentText}`;
          list.appendChild(div);

          nameInput.value = '';
          textInput.value = '';
          list.scrollTop = list.scrollHeight;
        })
        .catch(err => {
          console.error('Error saving comment:', err);
        });
    });
  });
}

//handle ratings
 function handleRatings() {
  document.querySelectorAll('.ratings').forEach(ratingDiv => {
  const stars = ratingDiv.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      const value = parseInt(star.getAttribute('data-value'));

      // Clear all previous selections
      stars.forEach(s => s.classList.remove('selected'));

      // Highlight stars up to the one clicked
      for (let i = 0; i < value; i++) {
        stars[i].classList.add('selected');
      }

      //Save rating to element's dataset
      ratingDiv.dataset.rating = value;
      console.log('Rated:', value);
    });

    //Add hover effect
    star.addEventListener('mouseover', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('hover', i <= index);
      });
    });

    star.addEventListener('mouseout', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });
  });
  });

 }

 // Handle search input
document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();

  if (!query) return;

  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const matches = data.filter(country => {
        return (
          country.Country.toLowerCase() === query ||                         // exact country
          country.Continent.toLowerCase().includes(query) ||                // partial region
          country.Dish.toLowerCase().includes(query)                        // partial dish
        );
      });

      // Display matching cards
      renderCountryCards(matches);

      // Update the section title
      document.getElementById('sectionTitle').textContent = `Results for "${query}"`;
    })
    .catch(err => {
      console.error("Search failed:", err);
    });
});
