// Fetch data from API
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())      
// Convert response to JSON
.then(data => {
 const postsDiv = document.getElementById("posts");

// Loop through posts and display them
data.slice(0, 5).forEach(post => {   // Display only 5 posts

const postItem = document.createElement("div");
            
postItem.innerHTML = `
<h3>${post.title}</h3>
<p>${post.body}</p>
<hr>
`;

postsDiv.appendChild(postItem);
});
})
.catch(error => console.log("Error fetching data:", error));
