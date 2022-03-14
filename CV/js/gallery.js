let galleryImages = document.querySelectorAll(".gallery-img");
let getLastesOpenedImg;
let windowWidth = window.innerWidth;

if (galleryImages) {
  console.log("noma");

  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      let getFullImg = getElementCss.getPropertyValue("background-image");
      let getImgUrlpos = getFullImg.split("/images/Gallery/");
      let setNewImgUrl = getImgUrlpos[1].replace('")', "");
      getLastesOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "images/Gallery/" + setNewImgUrl);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 100;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode("Next");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrevBtn = document.createElement("a");
        let btnPrevText = document.createTextNode("Prev");
        newPrevBtn.appendChild(btnPrevText);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.setAttribute("onclick", "changeImg(0)");
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-prev").remove();
  document.querySelector(".img-btn-next").remove();
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();
  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (changeDir == 1) {
    calcNewImg = getLastesOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
    console.log(calcNewImg);
  } else if (changeDir == 0) {
    calcNewImg = getLastesOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
    console.log(calcNewImg);
  }

  newImg.setAttribute("src", "images/Gallery/IMG" + calcNewImg + ".JPG");
  newImg.setAttribute("id", "current-img");
  getLastesOpenedImg = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 100;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right: " + calcImgToEdge + "px";

    let prevBtn = document.querySelector(".img-btn-prev");
    prevBtn.style.cssText = "left: " + calcImgToEdge + "px";
  };
}
