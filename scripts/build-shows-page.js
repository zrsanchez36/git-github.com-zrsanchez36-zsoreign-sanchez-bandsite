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



let dateArr = ['Mon Sept 06 2021', 'Tue Sept 21 2021', 'Fri Oct 15 2021'];
let venuArr = ['Ronald Lane', 'Pier 3 East', 'View Lounge'];


document.addEventListener('DOMContentLoaded', init);

 

function createShows1() {
    //Create Div For shows section
    const showSectionContainer = document.createElement('div');
    showSectionContainer.classList.add('dom__shows--container');
    
    const showContainer = document.getElementById('show__section--selector');
    showContainer.appendChild(showSectionContainer);
    //Create Div for showws section

    //Create H1 with shows"
    const showH1 = document.createElement('h1');
    showSectionContainer.appendChild(showH1);
    showH1.textContent = 'SHOWS';

    //Create Table

    const table = document.createElement('table');
    table.setAttribute('id', 'dom__table--identifier');
    table.classList.add('dom__table');
    showSectionContainer.appendChild(table);

    // Create Table row
    const tableRow = table.insertRow(0);
    tableRow.classList.add('dom__table--row');
    table.appendChild(tableRow);


    //Create Date as child of  table row
    const dateText = document.createElement('p');
    tableRow.appendChild(dateText);
    dateText.textContent = 'DATE';
    let dateVal = document.createElement('h3');
    tableRow.appendChild(dateVal);
    dateVal.textContent = dateArr[0]

    //Venue
    const venueText = document.createElement('p');
    tableRow.appendChild(venueText);
    venueText.textContent = 'VENUE';
    let venueVal = document.createElement('h4');
    tableRow.appendChild(venueVal);
    venueVal.textContent = venuArr[0];


    //LOCATION
    const locationText = document.createElement('p');
    tableRow.appendChild(locationText);
    locationText.textContent = 'LOCATION';
    let locationVal = document.createElement('h4');
    tableRow.appendChild(locationVal);
    locationVal.textContent = 'San Francisco, CA';
    
    
    //button
    const ticketButton = document.createElement('button');
    //ticketButton.classList.add('dom__ticket--button');
    ticketButton.setAttribute('id', 'dom__ticket--button')
    tableRow.appendChild(ticketButton);
    ticketButton.textContent = 'BUY TICKETS';
    ticketButton.classList.add('shows__button');
    const selectBtn = document.getElementById('dom__ticket--button');

    


}


function init() {
    let query = window.matchMedia('(max-width: 767px)');
    
    if(query.matches) {
        //if page is wider than 767px
        createShows1();
    }

    else{
        //if the page is narrower than 768px
        
        createShows1();
    }
}

createShows1();




// function map(array, callback) {
//     let newArr = []
//     for (elem of array)
// }