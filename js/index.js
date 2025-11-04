var imgList = Array.from(document.querySelectorAll(".item img"));

var lightBoxContaianer = document.getElementById("lightBoxContaianer");

var closeBtn = document.getElementById("closeBtn");

var currentSlideIndex;

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (eventInfo) {
    lightBoxContaianer.style.display = "flex";
    currentSlideIndex = imgList.indexOf(eventInfo.target);
    var imgSrc = eventInfo.target.getAttribute("src");
    lightBoxContaianer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
  });
}

closeBtn.addEventListener("click", function () {
  lightBoxContaianer.style.display = "none";
});

function slide(step) {
  currentSlideIndex += step;

  if (currentSlideIndex == imgList.length) {
    currentSlideIndex = 0;
  }

  if (currentSlideIndex < 0) {
    currentSlideIndex = imgList.length - 1;
  }

  var imgSrc = imgList[currentSlideIndex].getAttribute("src");
  lightBoxContaianer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
}

closeBtn.nextElementSibling.addEventListener("click", function () {
  slide(1);
});

closeBtn.previousElementSibling.addEventListener("click", function () {
  slide(-1);
});
