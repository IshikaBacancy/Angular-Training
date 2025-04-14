
document.addEventListener("DOMContentLoaded", function () {

  const logoutbtn = document.getElementById("logoutbutton");

  const blogscontainer = document.getElementById("blogs-container");

  const usernameDisplay = document.getElementById("username");

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (!loggedInUser) {
      window.location.href = "login.html";
      return;
  }

  usernameDisplay.textContent = `Welcome, ${loggedInUser.username}`;

  
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  
  if (blogs.length === 0) {
      blogscontainer.innerHTML = "<p>No blogs found. Please load or create some blogs.</p>";
      return;
  }

  blogs.forEach((blog, index) => {
      
      const commentCount = blog.comments ? blog.comments.length : 0;

      const blogCard = document.createElement("div");
      blogCard.className = "blog-card";

      blogCard.innerHTML = `
          <img src="${blog.image}" alt="${blog.title}">
          <span class="comment-badge">${commentCount}</span>
          <h3>${blog.title}</h3>
          <p>${blog.content.substring(0, 100)}...</p>

          <h4>Comments:</h4>
            <ul class="comment-list">
                ${blog.comments?.map((c, ci) => `
                    <div class="comment-item" data-blog-index="${index}" data-comment-index="${ci}">
                       <strong>${c.username}:</strong>
                       <span class="comment-text">${c.content}</span>
                       <input type="text" class="edit-input" style="display:none;" value="${c.content}" />
                       <button class="edit-button">Edit</button>
                       <button class="save-button" style="display:none;">Save</button>
                    </div>
                `).join("") || ""}
            </ul>

          <form class="comment-form" data-index="${index}">
              <input type="text" placeholder="Add a comment..." required />
              <button type="submit">Post</button>
          </form>
      `;

      
      blogscontainer.appendChild(blogCard);
  });


  document.querySelectorAll(".comment-form").forEach(form => {
      form.addEventListener("submit", function (e) {
          e.preventDefault(); 

         
          const blogIndex = this.getAttribute("data-index");

          const input = this.querySelector("input");

          const commentContent = input.value.trim();

          if (!commentContent) return;

          const newComment = {
              username: loggedInUser.username,
              content: commentContent
          };

    
          blogs[blogIndex].comments = blogs[blogIndex].comments || [];
          blogs[blogIndex].comments.push(newComment);


          localStorage.setItem("blogs", JSON.stringify(blogs));

          input.value = "";

          window.location.reload();
      });
  });
  document.querySelectorAll(".edit-button").forEach(btn => {
    btn.addEventListener("click", function () {
        const commentDiv = this.parentElement;
        const textSpan = commentDiv.querySelector(".comment-text");
        const inputField = commentDiv.querySelector(".edit-input");
        const saveButton = commentDiv.querySelector(".save-button");

        textSpan.style.display = "none";
        inputField.style.display = "inline-block";
        this.style.display = "none";
        saveButton.style.display = "inline-block";
    });
});

document.querySelectorAll(".save-button").forEach(btn => {
    btn.addEventListener("click", function () {
        const commentDiv = this.parentElement;
        const blogIndex = commentDiv.getAttribute("data-blog-index");
        const commentIndex = commentDiv.getAttribute("data-comment-index");
        const inputField = commentDiv.querySelector(".edit-input");
        const newCommentText = inputField.value.trim();

        if (newCommentText === "") return;

        blogs[blogIndex].comments[commentIndex].content = newCommentText;

       localStorage.setItem("blogs", JSON.stringify(blogs));

       window.location.reload();
    });
});

  
  logoutbtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
  });

});
