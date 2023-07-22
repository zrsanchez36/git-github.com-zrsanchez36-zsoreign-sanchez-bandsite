// Global variable to store the API key
let apiKey = null;

// Function to register and get the API key
function registerAndGetApiKey() {
  const registerUrl = '//project-1-api.herokuapp.com/register';

  fetch(registerUrl, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      // Assuming the API returns the key in the "api_key" field of the response
      apiKey = data.api_key;
      console.log('API Key:', apiKey);
    })
    .catch(error => {
      console.error('Error registering and getting API key:', error);
    });
}

// Call the function to register and get the API key
registerAndGetApiKey();








document.addEventListener("DOMContentLoaded", () => {
    const commentCard = document.getElementById("commentCard");
    const postCommentForm = document.getElementById("postComment");
    const userNameInput = document.getElementById("userName");
    const commentBox = document.getElementById("commentBox");
  
    const API_URL = "https://project-1-api.herokuapp.com/comments";
    const API_KEY = "34b9ef80-4eb4-4b2d-a6bc-e00cf821e49c";
  
    // Function to fetch comments from the API
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
        const comments = response.data;
        displayComments(comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
  
    // Function to display comments on the page
    const displayComments = (comments) => {
      commentCard.innerHTML = "";
      comments.forEach((comment) => {
        const commentElement = createCommentElement(comment);
        commentCard.appendChild(commentElement);
      });
    };
  
    // Function to create a comment element
    const createCommentElement = (comment) => {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment__card--item");
  
      const userIcon = document.createElement("div");
      userIcon.classList.add("user__icon--blank");
      commentElement.appendChild(userIcon);
  
      const commentContent = document.createElement("div");
      commentContent.classList.add("comment__content");
  
      const userName = document.createElement("p");
      userName.classList.add("user__name");
      userName.textContent = comment.name;
      commentContent.appendChild(userName);
  
      const timestamp = document.createElement("p");
      timestamp.classList.add("timestamp");
      const date = new Date(comment.timestamp);
      timestamp.textContent = date.toLocaleDateString();
      commentContent.appendChild(timestamp);
  
      const commentText = document.createElement("p");
      commentText.classList.add("comment__text");
      commentText.textContent = comment.comment;
      commentContent.appendChild(commentText);
  
      commentElement.appendChild(commentContent);
  
      return commentElement;
    };
  
    // Function to handle form submission and add a new comment
    const addComment = async (event) => {
      event.preventDefault();
  
      const name = userNameInput.value.trim();
      const comment = commentBox.value.trim();
  
      if (name === "" || comment === "") {
        alert("Please fill in all fields");
        return;
      }
  
      try {
        const response = await axios.post(`${API_URL}?api_key=${API_KEY}`, {
          name: name,
          comment: comment,
        });
        const newComment = response.data;
        displayNewComment(newComment);
        userNameInput.value = "";
        commentBox.value = "";
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    };
  
    // Function to display a newly added comment
    const displayNewComment = (comment) => {
      const commentElement = createCommentElement(comment);
      commentCard.insertBefore(commentElement, commentCard.firstChild);
    };
  
    // Event listener to fetch and display comments on page load
    fetchComments();
  
    // Event listener for form submission to add a new comment
    postCommentForm.addEventListener("submit", addComment);
  });
  