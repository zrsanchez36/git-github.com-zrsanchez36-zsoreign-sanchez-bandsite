// const showSectionContainer = document.createElement('div');
// const showContainer = document.getElementById('show__section--selector');
// const showH1 = document.createElement('h1');
// const dateText = document.createElement('p');
// let dateVal = document.createElement('h3');
// const venueText = document.createElement('p');
// let venueVal = document.createElement('h4');
// const locationText = document.createElement('p');
// let locationVal = document.createElement('h4');
// const ticketButton = document.createElement('button');

// //ADD CLASS//
// showSectionContainer.classList.add('dom__shows--container');
// ticketButton.classList.add('dom__ticket--button');



// showContainer.appendChild(showSectionContainer);
// showSectionContainer.appendChild(showH1);
// showSectionContainer.appendChild(dateText);
// showSectionContainer.appendChild(dateVal);
// showSectionContainer.appendChild(venueText);
// showSectionContainer.appendChild(venueVal);
// showSectionContainer.appendChild(locationText);
// showSectionContainer.appendChild(locationVal);
// showSectionContainer.appendChild(ticketButton)


// showH1.textContent = 'SHOWS';
// dateText.textContent = 'DATE';
// dateVal.textContent = 'Mon Sept 06 2021';
// venueText.textContent = 'VENUE';
// venueVal.textContent = 'Ronald Lane'
// locationText.textContent = 'LOCATION';
// locationVal.textContent = 'San Francisco, CA';
// ticketButton.textContent = 'BUY TICKETS';




// document.addEventListener('DOMContentLoaded', init);

 

// function createShows1() {
//     //Create Div For shows section
//     const showSectionContainer = document.createElement('div');
//     showSectionContainer.classList.add('dom__shows--container');
    
//     const showContainer = document.getElementById('show__section--selector');
//     showContainer.appendChild(showSectionContainer);
//     //Create Div for showws section

//     //Create H1 with shows"
//     const showH1 = document.createElement('h1');
//     showSectionContainer.appendChild(showH1);
//     showH1.textContent = 'SHOWS';

//     //Create Table

//     const table = document.createElement('table');
//     table.setAttribute('id', 'dom__table--identifier');
//     table.classList.add('dom__table');
//     showSectionContainer.appendChild(table);

//     // Create Table row
//     const tableRow = table.insertRow(0);
//     tableRow.classList.add('dom__table--row');
//     table.appendChild(tableRow);


//     //Create Date as child of  table row
//     const dateText = document.createElement('p');
//     tableRow.appendChild(dateText);
//     dateText.textContent = 'DATE';
//     let dateVal = document.createElement('h3');
//     tableRow.appendChild(dateVal);
//     dateVal.textContent = dateArr[0]

//     //Venue
//     const venueText = document.createElement('p');
//     tableRow.appendChild(venueText);
//     venueText.textContent = 'VENUE';
//     let venueVal = document.createElement('h4');
//     tableRow.appendChild(venueVal);
//     venueVal.textContent = venuArr[0];


//     //LOCATION
//     const locationText = document.createElement('p');
//     tableRow.appendChild(locationText);
//     locationText.textContent = 'LOCATION';
//     let locationVal = document.createElement('h4');
//     tableRow.appendChild(locationVal);
//     locationVal.textContent = 'San Francisco, CA';
    
    
//     //button
//     const ticketButton = document.createElement('button');
//     //ticketButton.classList.add('dom__ticket--button')
//     ticketButton.setAttribute('id', 'dom__ticket--button');
//     ticketButton.textContent = 'BUY TICKETS';
//     ticketButton.classList.add('shows__button'); 
//     tableRow.appendChild(ticketButton);
//     const selectBtn = document.getElementById('dom__ticket--button');

    


// }


// function init() {
//     let query = window.matchMedia('(max-width: 767px)');
    
//     if(query.matches) {
//         //if page is wider than 767px
//         createShows1();
//     }

//     else{
//         //if the page is narrower than 768px
        
//         createShows1();
//     }
// }


function buildCard(P, H3, P2, H4, P3, H42) {
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
    ticketButton.classList.add('dom__ticket--button');
    ticketButton.setAttribute('id', 'dom__ticket--button');
    ticketButton.textContent = 'BUY TICKETS';
    ticketButton.classList.add('shows__button');
    innerDiv.appendChild(ticketButton);
    const selectBtn = document.getElementById('dom__ticket--button'); 



    return outerDiv;
  }
  
  const cards = document.querySelector(".shows__container");
  
  const card1 = buildCard("DATE", "Mon Sept 06 2021", "VENUE", "Ronald Lane", "LOCATION", "San Francisco, CA");
  const card2 = buildCard("DATE", "Tue Sept 21 2021", "VENUE", "Pier 3 East", "LOCATION", "San Francisco, CA");
  const card3 = buildCard("DATE", "Fri Oct 15 2021", "VENUE", "View Lounge", "LOCATION", "San Francisco, CA");
  const card4 = buildCard("DATE", "Sat Nov 06 2021", "VENUE", "Hyatt Agency", "LOCATION", "San Francisco, CA");
  const card5 = buildCard("DATE", "Fri Nov 26 2021", "VENUE", "Moscow Center", "LOCATION", "San Francisco, CA");
  const card6 = buildCard("DATE", "Wed Dec 15 2021", "VENUE", "Press Club", "LOCATION", "San Francisco, CA");
  
  
  cards.appendChild(card1);
  cards.appendChild(card2);
  cards.appendChild(card3);
  cards.appendChild(card4);
  cards.appendChild(card5);
  cards.appendChild(card6);

// function map(array, callback) {
//     let newArr = []
//     for (elem of array)
// }
//let dateArr = ['Mon Sept 06 2021', 'Tue Sept 21 2021', 'Fri Oct 15 2021', 'Sat Nov 06 2021', 'Fri Nov 26 2021, Wed Dec 15 2021'];
//let venuArr = ['Ronald Lane', 'Pier 3 East', 'View Lounge', 'Hyatt Agency', 'Moscow Center', 'Press Club', ];
