const form = document.getElementById('postComment');

let defaultComment1 = {
    name: 'Connor Walton',
    comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
    timeStamp: '02/17/2021'

}

let defaultComment2 = {
    name: 'Emilie Beach',
    comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
    timeStamp: '01/09/2021'

}

let defaultComment3 = {
    name: 'Miles Acosta',
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    timeStamp: '12/20/2020'

}


let commentArr = [defaultComment1, defaultComment2, defaultComment3];


for (let i = 0; i < commentArr.length; i++) {
        console.log(commentArr[i]);
    }

form.addEventListener('submit', e => {
    e.preventDefault();
   // console.log('formsubmitted',);

    var myDate = new Date(), 
    currentMonth = myDate.getMonth() + 1,
    currentDay = myDate.getDate(),
    currentYear = myDate.getFullYear();

    //console.log(month,'/',day,'/',year );
    let cmmtDate = currentMonth.toString() + '/'+ currentDay.toString() + '/' + currentYear.toString();
    const dateTextDom = document.createElement('p');
    dateTextDom.innerText = cmmtDate;
    console.log(cmmtDate);


    const newUserFormData = new FormData(e.target);
    // console.log(newUserFormData);

    //create data obj
    var formDataObj = Object.fromEntries(newUserFormData.entries());
    newUserFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
   
    const newUser = document.getElementById('userName').value;
    const userComment = document.getElementById('commentBox').value;

    const userCommentDom = document.createElement('p');
    userCommentDom.innerText = userComment;

    console.log(newUser,userComment);
   
   


    let circleContainer = document.createElement('div');
    circleContainer.classList.add('user__icon--blank'); //Blank user icon constructor
    circleContainer.setAttribute('id', 'circle');
   



    const textBox = document.createElement('h3');
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('saved__comment--container');
    
    textBox.innerHTML = newUser;
    const commentSectionParent = document.getElementById('postCommentContainer');
    commentSectionParent.appendChild(commentWrapper);
    commentWrapper.append(circleContainer, textBox, dateTextDom, userCommentDom);
    
})
   


function displayComment() {
        
        //Create comment section div
        const commentSectionParent = document.getElementById('commentDOMSection');
        const savedCommtDiv = document.createElement('div');
        savedCommtDiv.classList.add('saved__comment--container');
        commentSectionParent.appendChild(savedCommtDiv);

        let circleContainer = document.createElement('div');
        circleContainer.classList.add('user__icon--blank'); //Blank user icon constructor
        circleContainer.setAttribute('id', 'circle');
        savedCommtDiv.appendChild(circleContainer);

            //create default comment username html
        let nameContainer = document.createElement('h3');
        nameContainer.classList.add('comment__creator');
        nameContainer.setAttribute('id', 'userComment');
        savedCommtDiv.appendChild(nameContainer);
        nameContainer.innerText = defaultComment1.name;
        //Create default comment username html



             //create default date in HTML
        let dateContainer = document.createElement('p');
        dateContainer.classList.add('date__text');
        dateContainer.setAttribute('id', 'commentDate');
        savedCommtDiv.appendChild(dateContainer);
        dateContainer.innerText = defaultComment1.timeStamp;
         //create default date in HTML



             //create default comment in html
        let commentContainer = document.createElement('p');
        commentContainer.classList.add('comment__text');
        commentContainer.setAttribute('id', 'commentText');
        savedCommtDiv.appendChild(commentContainer);
        commentContainer.innerText =  defaultComment1.comment;
         //create default comment in html
        

    }

    displayComment(defaultComment1);
    displayComment(defaultComment2);
    displayComment(defaultComment3); 