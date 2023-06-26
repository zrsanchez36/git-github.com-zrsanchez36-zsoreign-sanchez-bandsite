
let defaultComment1 = {
    name: 'Connor Walton',
    comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    timeStamp: '02/17/2021'

}

let defaultComment2 = {
    name: 'Connor Walton',
    comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    timeStamp: '02/17/2021'

}

let defaultComment3 = {
    name: 'Connor Walton',
    comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    timeStamp: '02/17/2021'

}


let commentArr = [defaultComment1, defaultComment2, defaultComment3];


    for (let i = 0; i < commentArr.length; i++) {
        console.log(commentArr[i]);
    }
    

    // function buildCommentSection (circle, name, date, comment ) {
       
        
    //     const commentSectionParent = document.getElementById('commentDOMSection');
    //     const savedCommtDiv = document.createElement('div');
    //     savedCommtDiv.classList.add('saved__comment--container');
    //     commentSectionParent.appendChild(savedCommtDiv);


    //     let circleContainer = document.createElement('div');
    //     circleContainer.classList.add('user__icon--blank'); //Blank user icon constructor
    //     circleContainer.setAttribute('id', circle);

    //     //create default comment username html
    //     let nameContainer = document.createElement('h3');
    //     nameContainer.classList.add('comment__creator');
    //     nameContainer.setAttribute('id', 'userComment');
    //     nameContainer.innerText = name;
    //     //Create default comment username html

    //     //create default date in HTML
    //     let dateContainer = document.createElement('p');
    //     dateContainer.classList.add('date__text');
    //     dateContainer.setAttribute('id', 'commentDate');
    //     dateContainer.innerText = date;
    //      //create default date in HTML


    //      //create default comment in html
    //     let commentContainer = document.createElement('p');
    //     commentContainer.classList.add('comment__text');
    //     commentContainer.setAttribute('id', 'commentText')
    //     commentContainer.innerText = comment;
    //      //create default comment in html


    //      savedCommtDiv.appendChild(circleContainer);
    //      savedCommtDiv.appendChild(nameContainer);
    //      savedCommtDiv.appendChild(dateContainer);
    //      savedCommtDiv.appendChild(commentContainer);


        
    //     return buildCommentSection;
    // }

    // const commmentCard = document.querySelector('.comment__card');

   




    const form = document.getElementById('comment_form');
 
    //event listner for form submission with nested functions
function submitComment() {
   
    //event listner for form submission with nested functions
    form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevents form from auto submitting
    console.log('form was submitted')
    

    // create username and comment text to store
    let userNameContainer = document.getElementById('user__name').value;
    let  userName = userNameContainer.toString();
    console.log(userNameContainer);
    console.log(userName);


    let commentContainer = document.getElementById('comment__box').value;
    let comment = commentContainer.toString();
    console.log(commentContainer);
    console.log(comment);
    
    
        var myDate = new Date(), 
            currentMonth = myDate.getMonth() + 1,
            currentDay = myDate.getDate(),
            currentYear = myDate.getFullYear();

        //console.log(month,'/',day,'/',year );
        let cmmtDate = currentMonth.toString() + '/'+ currentDay.toString() + '/' + currentYear.toString();
        console.log(cmmtDate);
       

    });


     function buildCommentSection (circle, name, date, comment ) {
       
        
        const commentSectionParent = document.getElementById('commentDOMSection');
        const savedCommtDiv = document.createElement('div');
        savedCommtDiv.classList.add('saved__comment--container');
        commentSectionParent.appendChild(savedCommtDiv);


        let circleContainer = document.createElement('div');
        circleContainer.classList.add('user__icon--blank'); //Blank user icon constructor
        circleContainer.setAttribute('id', circle);

        //create default comment username html
        let nameContainer = document.createElement('h3');
        nameContainer.classList.add('comment__creator');
        nameContainer.setAttribute('id', 'userComment');
        nameContainer.innerText = name;
        //Create default comment username html

        //create default date in HTML
        let dateContainer = document.createElement('p');
        dateContainer.classList.add('date__text');
        dateContainer.setAttribute('id', 'commentDate');
        dateContainer.innerText = date;
         //create default date in HTML


         //create default comment in html
        let commentContainer = document.createElement('p');
        commentContainer.classList.add('comment__text');
        commentContainer.setAttribute('id', 'commentText')
        commentContainer.innerText = comment;
         //create default comment in html


         savedCommtDiv.appendChild(circleContainer);
         savedCommtDiv.appendChild(nameContainer);
         savedCommtDiv.appendChild(dateContainer);
         savedCommtDiv.appendChild(commentContainer);


        
        return buildCommentSection;
    };
   
 buildCommentSection()
};

const commmentCard = document.querySelector('.comment__card');
submitComment()

// function displayComment(commentInfo) {
//     let newDate = getDate();
    
//     let userName = commentInfo.name.toString();
//     let userComment = commentInfo.comment.toString();

//     console.log(commentInfo.name);
//     console.log(commentInfo.comment);
//     console.log(commentInfo.timeStamp);
//     console.log(userName);
//     console.log(userComment);
//     console.log(newDate);
// }

// let comment__card1 = displayComment(defaultComment1);
// let comment__card2 = displayComment(defaultComment2)
// let comment__card3 = displayComment(defaultComment3);





// let comment__card1 = buildCommentSection('dsc', 'Connor Walton','02/17/2021', 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.');
// let comment__card2 = buildCommentSection('dsc', 'Emilie Beach','01/09/2021', 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.is is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.');
// let comment__card3 = buildCommentSection('dsc', 'Miles Acosta','12/20/2020', "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.");


// commmentCard.appendChild(comment__card1);
// commmentCard.appendChild(comment__card2);
// commmentCard.appendChild(comment__card3);

// const formSubmissonHandler = (click) => {
//     evnt.preventDefault();
//     document.getElementById('comment_form')
//     console.log(evnt.target);
// }


// document.querySelector('.comment__section');



// document
//         .querySelector('.comment_form')
//         .addEventListener('submit',submitFormHandler);




