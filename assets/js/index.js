import { posts } from "./data.js"

const section = document.getElementById("section-el")
let isLiked = false

document.addEventListener('click', function(e) {
    if (e.target.dataset.like) {
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(postId) {
    
    const targetPostObj = posts.filter(function(post) {
        return post.uuid === postId
    })[0]
    
    if (targetPostObj.isLiked) {
        targetPostObj.likes--
    } else {
        targetPostObj.likes++
    }
    targetPostObj.isLiked = !targetPostObj.isLiked
    renderPosts()
}


function renderPosts() {

    let postDOM = ``
    posts.forEach(function(post){    
        postDOM += `
        <div class="user-info">
            <img src="${post.avatar}" class="user-avatar" alt="user avatar">
            <div class="name-location">
                <h3>${post.name}</h3>
                <p>${post.location}</p>
            </div>
        </div>
            
        <div class="user-post">
            <img src="${post.photo}" alt="user post">
        </div>
            
        <div class="user-content">
            <div class="icons">
                <button class="btn"><i id="cuore" class="${post.isLiked ? 'fa-solid' : 'fa-regular'} fa-heart" data-like="${post.uuid}"></i></button>
                <button class="btn"><img class="icon-img" src="images/icon-comment.png" alt="comment on post"></button> 
                <button class="btn"><img class="icon-img" src="images/icon-dm.png" alt="dm the user"></button>  
            </div>
                
            <p class="user-likes" id="user-likes">${post.likes} likes</p>
            <p class="user-desc"><span>${post.username}</span> ${post.comment}</p>
        </div>
        `
    })
    section.innerHTML = postDOM
}

renderPosts()

const likeItem = document.getElementById("user-likes")
const numLikes = document.getElementsByClassName("icon-heart")

