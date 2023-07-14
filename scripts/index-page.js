
const submittedCommentsContainer = document.createElement('div');
submittedCommentsContainer.setAttribute('id', 'commentHolder');
submittedCommentsContainer.classList.add('submitted__comment--dom');

let comments = [
{
    name: 'Connor Walton',
    text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    timeStamp: '02/17/2021'

},

{
    name: 'Emilie Beach',
    text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    timeStamp: '01/09/2021'

},

{
    name: 'Miles Acosta',
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timeStamp: '12/20/2020'

}
];




//Show already created comments on load
window.addEventListener('load', allComments);


function displayComment(comment) {

    //Create comment section div
    //const commentSectionParent = document.getElementById('commentDOMSection');
    const commentCard = document.getElementById("commentCard");
    

    const savedCommtDiv = document.createElement('div');
    savedCommtDiv.classList.add('saved__comment--container');
    submittedCommentsContainer.appendChild(savedCommtDiv);


    let circleContainer = document.createElement('div');
    circleContainer.classList.add('user__icon--blank'); //Blank user icon constructor
    circleContainer.setAttribute('id', 'circle');
    savedCommtDiv.appendChild(circleContainer);

     //create default comment username html
    let nameContainer = document.createElement('h3');
    nameContainer.classList.add('comment__creator');
    nameContainer.setAttribute('id', 'userComment');
    nameContainer.textContent = comment.name;
     //create default comment username html

    //create default date in HTML
    let dateContainer = document.createElement('p');
    dateContainer.classList.add('date__text');
    dateContainer.setAttribute('id', 'commentDate');
    dateContainer.textContent = comment.timeStamp;
    //create default date in HTML



    //create default comment in html
    let commentContainer = document.createElement('p');
    commentContainer.classList.add('comment__text');
    commentContainer.setAttribute('id', 'commentText');
    commentContainer.textContent = comment.text;
    //create default comment in html

    
    savedCommtDiv.appendChild(circleContainer);
    savedCommtDiv.appendChild(nameContainer);
    savedCommtDiv.appendChild(dateContainer);
    savedCommtDiv.appendChild(commentContainer);


    commentCard.appendChild(savedCommtDiv);


}




function allComments() {
    const commentCard = document.getElementById("commentCard");
    commentCard.innerHTML = '';

    comments.forEach(comment =>{
        displayComment(comment);
    });
}



function formSubmissionHandler(event) {
    event.preventDefault();

    const newUserInput = document.getElementById('userName');
    const userComment = document.getElementById('commentBox');

    const userName = newUserInput.value;
    const comment = userComment.value;


    if (userName && comment) {
        const newComment = {
            name: userName,
            timeStamp: new Date().toLocaleDateString(),
            text: comment
        };

        comments.push(newComment);

        allComments();

        newUserInput.value = '';
        userComment.value = '';
    }
}


const form = document.getElementById('postComment');
form.addEventListener('submit', formSubmissionHandler);