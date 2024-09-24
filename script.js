let nextDom = document.querySelector("#next");
let prevDom = document.querySelector("#prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.addEventListener("click", () => {
  showSlider("next");
});
prevDom.addEventListener("click", () => {
  showSlider("prev");
});

let timeRunning = 1000;
let runTimeOut;
let autoTimeNext = 7000;
let runAutoRun;
clearInterval(runAutoRun);
runAutoRun = setInterval(() => {
  nextDom.click()
}, autoTimeNext);


function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let thumbnailSlider = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(thumbnailSlider[0]);
    carouselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(thumbnailSlider[positionLastItem]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);


}
