const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postsContainer = document.getElementById("posts-container")

function renderPosts() {
    let result = ""
    for (let i = 0; i < posts.length; i++) {
        result += `<section>
            <div class="post-header">
                <img class="user-avatar" src="${posts[i].avatar}">
                <div class="post-author">
                    <p class="name">${posts[i].name}</p>
                    <p class="location">${posts[i].location}</p>
                </div>
            </div>
            <img class="post" src="${posts[i].post}">
            <div class="btn-section">
                <img id="like" class="btn" src="images/icon-heart.png">
                <img id="comment" class="btn" src="images/icon-comment.png">
                <img id="share" class="btn" src="images/icon-dm.png">
            </div>
            <p class="likes">${posts[i].likes} likes</p>
            <p class="username-caption"><span class="usarname">${posts[i].username}</span> ${posts[i].comment}</p>
        </section>`
    }
    postsContainer.innerHTML = result
}



