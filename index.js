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

function renderPost() {
    posts.forEach(function(post) {
        document.getElementById('post-wrapper').innerHTML += `
            <article class="post">
                <header class="post__header">
                    <div class="post__user-info">
                        <img src="${post.avatar}" class="post__user-info-avatar">
                        <div class="post__user-info-wrapper">
                            <p class="post__user-info-name">${post.name}</p>
                            <p class="post__user-info-location">${post.location}</p>
                        </div>
                    </div>
                </header>
                <div>
                    <img src="${post.post}">
                </div>
                <footer class="post__footer">
                    <div class="post__footer-icon-wrapper">
                        <img class="post__footer-icon" src="/images/icon-heart.png">
                        <img class="post__footer-icon" src="/images/icon-comment.png">
                        <img class="post__footer-icon" src="/images/icon-dm.png">
                    </div>
                    <p class="post__footer-likes">${post.likes} likes</p>
                    <p class="post__footer-comment"><b>${post.username}</b> ${post.comment}</p>
                </footer>
            </article>
        `
    })
}

renderPost()