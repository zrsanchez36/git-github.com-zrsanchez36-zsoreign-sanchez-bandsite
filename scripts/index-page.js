
const submittedCommentsContainer = document.createElement('div');
submittedCommentsContainer.setAttribute('id', 'commentHolder');
submittedCommentsContainer.classList.add('submitted__comment--dom');


// Get the default instance
//const axios = require('axios');


// let comments = [
// {
//     name: 'Connor Walton',
//     text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
//     timeStamp: '02/17/2021'

// },

// {
//     name: 'Emilie Beach',
//     text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
//     timeStamp: '01/09/2021'

// },

// {
//     name: 'Miles Acosta',
//     text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     timeStamp: '12/20/2020'

// }
// ];






// Step 1: Register with the API and get the API key
function registerAndGetAPIKey() {
    axios
      .get("https://project-1-api.herokuapp.com/register")
      .then((response) => {
        // Step 2: Extract the API key from the response data
        const apiKey = response.data.api_key;
  
        // Step 3: Store the API key in a global variable (for demonstration purposes)
        // In a real project, you should securely store the API key, such as using environment variables
        window.globalApiKey = apiKey;
  
        // Step 4: Fetch and display comments using the API key
        fetchAndDisplayComments();
      })
      .catch((error) => {
        console.error("Error registering and getting API key:", error);
      });
  }
  
  // Step 5: Function to fetch and display comments
  function fetchAndDisplayComments() {
    const apiURL = "https://project-1-api.herokuapp.com/comments";
    const api_key = window.globalApiKey; // Use the stored API key
  
    // Append the API key to the URL
    const requestURL = `${apiURL}?api_key=${api_key}`;
  
    axios
      .get(requestURL)
      .then((response) => {
        const comments = response.data;
  
        // Step 6: Call the existing displayComments() function to show comments on the page
        displayComments(comments);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }
  
  // Step 7: Function to display comments on the Bio Page
  function displayComments(comments) {
    const commentCard = document.getElementById("commentCard");
    commentCard.innerHTML = "";
  
    comments.forEach((comment) => {
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("comment-container");
  
      const nameElement = document.createElement("p");
      nameElement.classList.add("comment-name");
      nameElement.textContent = comment.name;
  
      const timestampElement = document.createElement("p");
      timestampElement.classList.add("comment-timestamp");
      timestampElement.textContent = new Date(comment.timestamp).toLocaleString();
  
      const commentTextElement = document.createElement("p");
      commentTextElement.classList.add("comment-text");
      commentTextElement.textContent = comment.comment;
  
      commentContainer.appendChild(nameElement);
      commentContainer.appendChild(timestampElement);
      commentContainer.appendChild(commentTextElement);
  
      commentCard.appendChild(commentContainer);
    });
  }
  
  // Step 8: Function to handle comment submission
  function handleCommentSubmit(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("userName");
    const commentInput = document.getElementById("commentBox");
  
    const name = nameInput.value;
    const commentText = commentInput.value;
  
    if (name && commentText) {
      const newComment = {
        name: name,
        comment: commentText,
      };
  
      const apiURL = "https://project-1-api.herokuapp.com/comments";
      const api_key = window.globalApiKey;
  
      // Append the API key to the URL
      const requestURL = `${apiURL}?api_key=${api_key}`;
  
      axios
        .post(requestURL, newComment)
        .then((response) => {
          // Step 9: Refresh the comments list after successful submission
          fetchAndDisplayComments();
  
          // Clear input fields
          nameInput.value = "";
          commentInput.value = "";
        })
        .catch((error) => {
          console.error("Error posting comment:", error);
        });
    }
  }
  
  // Step 10: Add event listeners on page load
  window.addEventListener("load", () => {
    registerAndGetAPIKey();
  
    const commentForm = document.getElementById("postComment");
    commentForm.addEventListener("submit", handleCommentSubmit);
  });
  