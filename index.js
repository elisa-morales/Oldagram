const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        didLike: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        didLike: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        didLike: false
    }
]

const section = document.getElementById("section-el")

function rest() {
    section.innerHTML = ""
}

function renderPosts() {
    let postDOM = ""
    for (let i = 0; i < posts.length; i++) {
        postDOM += `
        <div class="user-info">
            <img src="${posts[i].avatar}" class="user-avatar" alt="user avatar">
            <div class="name-location">
                <h3>${posts[i].name}</h3>
                <p>${posts[i].location}</p>
            </div>
        </div>
            
        <div class="user-post">
            <img src="${posts[i].post}" alt="user post">
        </div>
            
        <div class="user-content">
            <div class="icons">
                <button class="btn"><img onclick="addLikes(${i})" class="icon-img" id="like-icon" src="images/${posts[i].didLike ? 'red-heart.png' : 'icon-heart.png'}" alt="heart"></button>
                <button class="btn"><img class="icon-img" src="images/icon-comment.png" alt="comment on post"></button> 
                <button class="btn"><img class="icon-img" src="images/icon-dm.png" alt="dm the user"></button>  
            </div>
                
            <p class="user-likes" id="user-likes">${posts[i].likes} likes</p>
            <p class="user-desc"><span>${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
        `
    }
    section.innerHTML = postDOM
}

renderPosts()

const likeItem = document.getElementById("user-likes")
const numLikes = document.getElementsByClassName("icon-heart")

let addLikes = (i) => {
    if (posts[i].didLike === false) {
        posts[i] = {
            ...posts[i],
            likes: posts[i].likes + 1,
            didLike: true
        }
    } else {
        posts[i] = {
            ...posts[i],
            likes: posts[i].likes - 1,
            didLike: false
        }
    }
    rest()
    renderPosts()
}