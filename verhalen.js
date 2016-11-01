
document.querySelector(".add").addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.querySelector(".add-story");
    div.style.display = "block";
    setTimeout(function (event) {
        div.style.display = "none";
    }, 2000);
});


var iconShare = document.querySelector('.share-icon');

var sharePopup = document.querySelector('.share');

var openShare = function (event) {
    event.preventDefault();
    sharePopup.classList.toggle('openShare')

}

iconShare.addEventListener('click', openShare);


var UnLike = document.querySelector('.like-empty');

var GoneLike = function (event) {
    event.preventDefault();
    UnLike.classList.toggle('GoneLike')

}

UnLike.addEventListener('click', GoneLike);


var Like = document.querySelector('.like-full');

var HiLike = function (event) {
    event.preventDefault();
    Like.classList.toggle('HiLike')

}

UnLike.addEventListener('click', HiLike);





