const showArray = [
  {
    date: 'Mon Sept 06 2021',
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
    button: "<button class='ticket__button'>BUY TICKETS</button>"
  },
  {
      date: 'Tue Sept 21 2021',
      venue: 'Pier 3 East',
      location: 'San Francisco, CA',
      button : "<button class='ticket__button'>BUY TICKETS</button>"
  },
    
  {
      date: 'Fri Oct 15 2021',
      venue: 'View Lounge',
      location: 'San Francisco, CA',
      button : "<button class='ticket__button'>BUY TICKETS</button>"
  },
    
  {
      date: 'Mon Sat Nov 06 2021',
      venue: 'Hyatt Agency',
      location: 'San Francisco, CA',
      button : "<button class='ticket__button'>BUY TICKETS</button>"
  },
    
  {
      date: 'Fri Nov 26 2021',
      venue: 'Moscow Center',
      location:'San Francisco, CA',
      button : "<button class='ticket__button'>BUY TICKETS</button>"
  },
    
  {
      date: 'Wed Dec 15 2021',
      venue: 'Press Club',
      location: 'San Francisco, CA',
      button : "<button class='ticket__button'>BUY TICKETS</button>"
  },
    
];

function buildShowCard(show) {
  // Your original buildShows function code here
  const outerDiv = document.createElement('div');
  outerDiv.classList.add('outer__div');

  const innerDiv = document.createElement('div');
  innerDiv.classList.add('inner__div');

  const date = document.createElement('p');
  const venueText = document.createElement('p');
  const locationText = document.createElement('p');
  const dateVal = document.createElement('h3');
  const venueVal = document.createElement('h4');
  const locationVal = document.createElement('h4');
  const buyTicket = document.createElement('button');

  date.innerText = 'DATE';
  dateVal.innerText = show.date;
  venueText.innerText = 'VENUE';
  venueVal.innerText = show.venue;
  locationText.innerText = 'LOCATION';
  locationVal.innerText = show.location;
  buyTicket.innerHTML = show.button;

  innerDiv.appendChild(date);
  innerDiv.appendChild(dateVal);
  innerDiv.appendChild(venueText);
  innerDiv.appendChild(venueVal);
  innerDiv.appendChild(locationText);
  innerDiv.appendChild(locationVal);
  innerDiv.appendChild(buyTicket);
  outerDiv.appendChild(innerDiv);

  return outerDiv;
}

function buildTableRow(show) {
  // Build a table row with show data
  const row = document.createElement('tr');
  const dateCell = document.createElement('td');
  const venueCell = document.createElement('td');
  const locationCell = document.createElement('td');
  const buttonCell = document.createElement('td');

  dateCell.textContent = show.date;
  venueCell.textContent = show.venue;
  locationCell.textContent = show.location;
  buttonCell.innerHTML = show.button;

  row.appendChild(dateCell);
  row.appendChild(venueCell);
  row.appendChild(locationCell);
  row.appendChild(buttonCell);

  return row;
}

function initializePage() {
  const showContainer = document.getElementById('show__section--selector');
  const cards = document.querySelector('.shows__container');
  const showTable = document.querySelector('.table__container');

  // Remove existing content
  cards.innerHTML = '';
  showTable.querySelector('tbody').innerHTML = '';

  // Build show cards and table content
  for (const show of showArray) {
    const showCard = buildShowCard(show);
    cards.appendChild(showCard);

    const row = buildTableRow(show);
    showTable.querySelector('tbody').appendChild(row);
  }

  // Toggle visibility based on screen size
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    cards.style.display = 'none';
    showTable.style.display = 'block';
  } else {
    cards.style.display = 'grid';
    showTable.style.display = 'none';
  }
}

// Initialize the page on load
initializePage();

// Listen to the resize event to update visibility on window resize
window.addEventListener('resize', initializePage);