// Upcoming Features >= {Dark Mode}

import { posts } from "./posts.js";
// alert(posts[0].name);
const container = document.getElementById("container");

const mappedData = posts
  .map((data) => {
    // // console.log(data.name);
    // // console.log(container);
    // let container = document.getElementsByClassName("container");

    // container.innerHTML += `<h1>${data.name}</h1>`;

    return `<article class="post">
  <div class="post-avatar">
    <img src="${data.avatar}" alt="" />
    <div class="post-author">
      <h3>${data.name}</h3>
      <p>${data.location}</p>
    </div>
  </div>
  <img src="${data.post}" alt="" class="post-image" />
  
  <div class="post-icons">
    <i class="fa-solid fa-heart post-icons-logo heart-icon"></i>
    <i class="fa-regular fa-comment post-icons-logo"></i>
    <img src="images/icon-dm.png" alt="" class="post-icons-logo" />
  </div>
  <div class="post-actions">
    <p class="post-likes">${data.likes} Likes</p>
    <p class="post-author">
      <strong>${data.username}</strong>${data.comment}
    </p>
  </div>
  </article>`;
  })
  .join("");

// .join is to remove the unexpected comma produced by Mapping

container.innerHTML = mappedData;

let heartIcons = document.querySelectorAll(".heart-icon");

heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    // heartIcon.style.color = "green";

    let likesCount =
      heartIcon.parentNode.nextElementSibling.firstChild.nextElementSibling;
    let likesCountString = likesCount.innerText;

    if (heartIcon.classList.contains("liked")) {
      heartIcon.classList.remove("liked");
      // let nextP = document.que;

      let numberFromLikes = justNumbers(likesCountString);
      numberFromLikes--;
      likesCountString = numberFromLikes;
      likesCount.innerHTML = `${likesCountString} Likes`;
    } else {
      heartIcon.classList.add("liked");

      let numberFromLikes = justNumbers(likesCountString);
      console.log(numberFromLikes);
      numberFromLikes++;
      likesCountString = numberFromLikes;
      likesCount.innerHTML = `${likesCountString} Likes`;
    }
  });
});

// Take Numbers from A Whole String
function justNumbers(string) {
  var numsStr = string.replace(/[^0-9]/g, "");
  return parseInt(numsStr);
}

// Click Image to like post  [Instagram]
const postsImages = document.querySelectorAll(".post-image");
console.log(postsImages);

postsImages.forEach((img) => {
  img.addEventListener("dblclick", () => {
    let oldSrc = img.getAttribute("src");
    // console.log(oldSrc);
    img.src =
      "https://www.pngitem.com/pimgs/m/308-3082498_heart-logo-png-transparent-png.png";

    let firstIcon = img.nextElementSibling.firstElementChild;
    // console.log();
    firstIcon.classList.add("liked");

    setTimeout(() => {
      img.src = oldSrc;
    }, 1000);
  });
});
