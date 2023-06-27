
let showObj1 = {
  date: 'Mon Sept 06 2021',
  venue: 'Ronald Lane' ,
  location: 'San Francisco, CA'
};

let showObj2 = {
  date: 'Tue Sept 21 2021',
  venue: 'Pier 3 East',
  location: 'San Francisco, CA'
};

let showObj3 = {
  date: 'Fri Oct 15 2021',
  venue: 'View Lounge',
  location: 'San Francisco, CA'
};

let showObj4 = {
  date: 'Mon Sat Nov 06 2021',
  venue: 'Hyatt Agency',
  location: 'San Francisco, CA'
};

let showObj5 = {
  date: 'Fri Nov 26 2021',
  venue: 'Moscow Center',
  location:'San Francisco, CA'
};

let showObj6 = {
  date: 'Wed Dec 15 2021',
  venue: 'Press Club',
  location: 'San Francisco, CA'
};

function init() {
    let query = window.matchMedia('(max-width: 767px)');
    
    if(query.matches) {
        //if page is wider than 767px
        buildShows();
        buildShowCards();
    }

    else{
        //if the page is narrower than 768px
        
        buildShows2();
    }
}


window.buildShows = function(P, H3, P2, H4, P3, H42) {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add('outerDiv');
  
    const innerDiv = document.createElement("div");
    innerDiv.classList.add('inner_div');
    
    const date = document.createElement("p"); //date
    const venueText = document.createElement("p"); //VENUE
    const locationText = document.createElement("p");
    const dateVal = document.createElement("h3");
    const venueVal = document.createElement("h4");
    const locationVal = document.createElement("h4");
    // const p = document.createElement("p");
  
    const showContainer = document.getElementById('show__section--selector');
    showContainer.appendChild(outerDiv);


    date.innerText = P;
    dateVal.innerText = H3;
    venueText.innerText = P2;
    locationVal.innerText = H4;
    venueVal.innerText = H4;
    locationText.innerText = P3;
    locationVal.innerText = H42;

    // img.setAttribute("alt", alt);
  
    innerDiv.appendChild(date);
    innerDiv.appendChild(dateVal);
    innerDiv.appendChild(venueText);
    innerDiv.appendChild(venueVal);
    innerDiv.appendChild(locationText);
    innerDiv.appendChild(locationVal);
  
    outerDiv.appendChild(innerDiv);
  
    
    const ticketButton = document.createElement('button');
    ticketButton.setAttribute('id', 'dom__ticket--button');
    ticketButton.textContent = 'BUY TICKETS';
    ticketButton.classList.add('shows__button');
    innerDiv.appendChild(ticketButton);
    const selectBtn = document.getElementById('dom__ticket--button'); 



    return outerDiv;
  };
  

  window.buildShowCards = function() {
  const cards = document.querySelector(".shows__container");
  
  const card1 = buildShows("DATE", "Mon Sept 06 2021", "VENUE", "Ronald Lane", "LOCATION", "San Francisco, CA");
  const card2 = buildShows("DATE", "Tue Sept 21 2021", "VENUE", "Pier 3 East", "LOCATION", "San Francisco, CA");
  const card3 = buildShows("DATE", "Fri Oct 15 2021", "VENUE", "View Lounge", "LOCATION", "San Francisco, CA");
  const card4 = buildShows("DATE", "Sat Nov 06 2021", "VENUE", "Hyatt Agency", "LOCATION", "San Francisco, CA");
  const card5 = buildShows("DATE", "Fri Nov 26 2021", "VENUE", "Moscow Center", "LOCATION", "San Francisco, CA");
  const card6 = buildShows("DATE", "Wed Dec 15 2021", "VENUE", "Press Club", "LOCATION", "San Francisco, CA");
  
  
  cards.appendChild(card1);
  cards.appendChild(card2);
  cards.appendChild(card3);
  cards.appendChild(card4);
  cards.appendChild(card5);
  cards.appendChild(card6);
  
  return buildShowCards;
  
  };

  buildShowCards();

  
  window.buildShows2 = function() {

    //create table div
    const tableDiv = document.createElement('div');
    tableDiv.classList.add('table__container');
    const showContainer = document.getElementById('show__section--selector');
    showContainer.appendChild(tableDiv);

    
    //create diom table and give it class and ID
    const showTable = document.createElement('table');
    showTable.classList.add('show__table');
    showTable.setAttribute('id', 'tableDom');
    tableDiv.appendChild(showTable);

    //CREATE TR1 (heading row)  make them children of the able and row

    const row1 = document.createElement('tr');
    row1.classList.add('table__row--headings');
    row1.setAttribute('id', 'rowHeadings');
    showTable.appendChild(row1);

    const dateHeading = document.createElement('p');
    const venueHeading = document.createElement('p');
    const locationHeading = document.createElement('p');


  }

  buildShows2();


// function map(array, callback) {
//     let newArr = []
//     for (elem of array)
// }
//let dateArr = ['Mon Sept 06 2021', 'Tue Sept 21 2021', 'Fri Oct 15 2021', 'Sat Nov 06 2021', 'Fri Nov 26 2021, Wed Dec 15 2021'];
//let venuArr = ['Ronald Lane', 'Pier 3 East', 'View Lounge', 'Hyatt Agency', 'Moscow Center', 'Press Club', ];
