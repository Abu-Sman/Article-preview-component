"use strict";

const container = document.querySelector(".share-container");
const iconShare = document.querySelector(".share-box");
const iconShareImg = document.querySelector(".share-img");

const manipulateContainer = function (bg, src) {
  iconShare.style.backgroundColor = bg;
  iconShareImg.src = `images/icon-${src}.svg`;
  container.classList.toggle("hide");
};

iconShare.addEventListener("click", function () {
  if (container.classList.contains("hide")) {
    manipulateContainer("#6d7f97", "sharewhite");
  } else {
    manipulateContainer("#ecf2f8", "share");
  }
});

document.querySelector(".show").addEventListener("click", function () {
  manipulateContainer("#ecf2f8", "share");
});
