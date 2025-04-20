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
let renderHtml = ''

document.getElementById('post-wrapper').innerHTML =
    renderHtml =  `
        <article>
            <header class="post-header">
                <div class="user-info">
                    <img src="${posts[0].avatar}" class="user-info__avatar">
                    <div class="user-info__wrapper">
                        <p class="user-info__name">${posts[0].name}</p>
                        <p class="user-info__location">${posts[0].location}</p>
                    </div>
                </div>
            </header>
            <div>
                <img src="${posts[0].post}">
            </div>
            <footer>
                <div>
                    <img src="/images/icon-heart.png">
                    <img src="/images/icon-comment.png">
                    <img src="/images/icon-dm.png">
                </div>
                <div>
                    <p>${posts[0].likes} likes</p>
                </div>
                <div>
                    <p>${posts[0].username} ${posts.comment}</p>
                </div>
            </footer>
        </article>
    `