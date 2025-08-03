
  const micIcon = document.querySelector('.mic-icon');
  micIcon.addEventListener('click', () => {
    alert('Listening for voice input...');
  });


  const searchInput = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      alert(`You searched for: "${query}"`);
    } else {
      alert('Please enter something to search.');
    }
  });

  const videoCards = document.querySelectorAll('.video-card');
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h4').innerText;
      alert(`Playing video: "${title}"`);
    });
  });

  const sidebarItems = document.querySelectorAll('.sidebar li');
  sidebarItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      console.log(`Hovering on: ${item.innerText.trim()}`);
    });
  });
