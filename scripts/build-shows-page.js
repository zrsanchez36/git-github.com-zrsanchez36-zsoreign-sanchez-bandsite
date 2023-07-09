//Variable declaration------------------------------------------------------------------------------------
                                                                                                      // |
                                                                                                      // |
//Create ticket button                                                                                // |
const ticketButton = document.createElement('button');                                                   
ticketButton.setAttribute('id', 'dom__ticket--button');
ticketButton.textContent = 'BUY TICKETS';
ticketButton.classList.add('shows__button');
const buyButton = "<button class='ticket__button'>BUY TICKETS</button>";


const showContainer = document.getElementById('show__section--selector');
const cards = document.querySelector(".shows__container");






//showContainer.appendChild(ticketButton);

                                                                                                      //  |
                                                                                                      //  |
//Variable declaration -----------------------------------------------------------------------------------|



let showArray = [{
  date: 'Mon Sept 06 2021',
  venue: 'Ronald Lane' ,
  location: 'San Francisco, CA',
  button : buyButton
},

{
  date: 'Tue Sept 21 2021',
  venue: 'Pier 3 East',
  location: 'San Francisco, CA',
  button : buyButton
},

{
  date: 'Fri Oct 15 2021',
  venue: 'View Lounge',
  location: 'San Francisco, CA',
  button : buyButton
},

{
  date: 'Mon Sat Nov 06 2021',
  venue: 'Hyatt Agency',
  location: 'San Francisco, CA',
  button : buyButton
},

{
  date: 'Fri Nov 26 2021',
  venue: 'Moscow Center',
  location:'San Francisco, CA',
  button : buyButton
},

{
  date: 'Wed Dec 15 2021',
  venue: 'Press Club',
  location: 'San Francisco, CA',
  button : buyButton
},
]


// //ronald lane show data(0bj1)
// const showLocation = showObj1.location;
// const rlDate = showObj1.date;
// const rlVenue = showObj1.venue;

// //e show data(0bj2)

// const p3Date = showObj2.date;
// const p3Venue = showObj2.venue;


// // show data(0bj3)

// const vLDate = showObj3.date;
// const vLVenue = showObj3.venue;


// // show data(0bj4)

// const hAaDate = showObj4.date;
// const hAVenue = showObj4.venue;


// // show data(0bj5)

// const mClDate = showObj5.date;
// const mCVenue = showObj5.venue;


// // show data(0bj6)

// const pCDate = showObj6.date;
// const pCVenue = showObj6.venue;


    




  const query = window.matchMedia('(max-width: 767px)');
  // const handler = function(ev){ //..
  // } 

  const handler = function pageInitialize(e) { 
    if(e.matches) {
        //if page 767px or less
       //buildTable(showArray);
        buildShowCards();
        
        // buildShowCards();
    }

    else{
        //if the page is more 768px
        //return buildShowCards();
        buildTable(showArray);
        //
        
         
    }
  }



  if (query?.addEventListener) {
    query.addEventListener('change', handler);
  } else {
    query.addEventListener(handler);
}


 
 
 

  //query.addEventListner('change', (pageInitialize));


function buildShows (P, H3, P2, H4, P3, H42, ticketButton) {
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
    const buyTicket = document.createElement("button");


    buyTicket.setAttribute('id', 'dom__ticket--button');
    buyTicket.textContent = 'BUY TICKETS';
    buyTicket.classList.add('shows__button');
    // const p = document.createElement("p");
  
    //const showContainer = document.getElementById('show__section--selector');
    showContainer.appendChild(outerDiv);


    date.innerText = P;
    dateVal.innerText = H3;
    venueText.innerText = P2;
    locationVal.innerText = H4;
    venueVal.innerText = H4;
    locationText.innerText = P3;
    locationVal.innerText = H42;
    buyTicket.innerText = 'BUY TICKETS'

    ticketButton.innerText = 'BUY TICKETS';

    // img.setAttribute("alt", alt);
  
    innerDiv.appendChild(date);
    innerDiv.appendChild(dateVal);
    innerDiv.appendChild(venueText);
    innerDiv.appendChild(venueVal);
    innerDiv.appendChild(locationText);
    innerDiv.appendChild(locationVal);
    innerDiv.appendChild(buyTicket);
    outerDiv.appendChild(innerDiv);
  
    
    
    
    


    return outerDiv;
  };
  

function  buildShowCards() {
  //const cards = document.querySelector(".shows__container");
  
  const card1 = buildShows("DATE", "Mon Sept 06 2021", "VENUE", "Ronald Lane", "LOCATION", "San Francisco, CA", ticketButton);
  const card2 = buildShows("DATE", "Tue Sept 21 2021", "VENUE", "Pier 3 East", "LOCATION", "San Francisco, CA", ticketButton);
  const card3 = buildShows("DATE", "Fri Oct 15 2021", "VENUE", "View Lounge", "LOCATION", "San Francisco, CA", ticketButton);
  const card4 = buildShows("DATE", "Sat Nov 06 2021", "VENUE", "Hyatt Agency", "LOCATION", "San Francisco, CA", ticketButton);
  const card5 = buildShows("DATE", "Fri Nov 26 2021", "VENUE", "Moscow Center", "LOCATION", "San Francisco, CA", ticketButton);
  const card6 = buildShows("DATE", "Wed Dec 15 2021", "VENUE", "Press Club", "LOCATION", "San Francisco, CA",ticketButton);
  
  
  cards.appendChild(card1);
  cards.appendChild(card2);
  cards.appendChild(card3);
  cards.appendChild(card4);
  cards.appendChild(card5);
  cards.appendChild(card6);
  
  return buildShowCards;
  };

  
  


  
 function buildTable(data) {


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

  const dateHeading = document.createElement('th');
  const venueHeading = document.createElement('th');
  const locationHeading = document.createElement('th');


  const tableBodyDom = document.createElement('tbody');
  tableBodyDom.setAttribute('id', 'showTableBodyDOM');
  tableBodyDom.classList.add('show__table');
  showTable.appendChild(tableBodyDom);

  const tableBody = document.getElementById('showTableBodyDOM');
  dateHeading.innerText ='DATE';
  venueHeading.innerText = 'VENUE';
  locationHeading.innerText = 'LOCATION';

  row1.appendChild(dateHeading);
  row1.appendChild(venueHeading);
  row1.appendChild(locationHeading);




    // //create table row 2 with table data
    // const row2 = document.createElement('tr');
    // row2.classList.add('table__data--row');
    // row2.setAttribute('id','dataRow');
    // showTable.appendChild(row2);



    // const row2Date = document.createElement('td')
    
   for (var i = 0; i < data.length; i++){
    
    const row = ` <tr class= "table__row" id="dataRows">
                        <td class="table__data--date" id="tableDataDate">${data[i].date}</td>
                        <td class="table__data--venue" id="tableDataVenue">${data[i].venue}</td>
                        <td class="table__data--location" id="tableDataLocation">${data[i].location}</td>
                        <td>${data[i].button}</td>
                  </tr>`

                  tableBody.innerHTML += row;
   }
   return buildTable;
  }



