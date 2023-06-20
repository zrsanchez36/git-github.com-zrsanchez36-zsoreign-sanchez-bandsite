let commentObj = [];

const formSubmissonHandler = (evnt) => {
    evnt.preventDefault();
    console.log(evnt.target);
}


document.querySelector('.comment__section');



document
        .querySelector('.comment_form')
        .addEventListener('submit',submitFormHandler);




