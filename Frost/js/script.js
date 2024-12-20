var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



let currentIndex = 0;

function moveSlide(direction) {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Remove 'active' class from current item
    items[currentIndex].classList.remove('active');

    // Update currentIndex
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Add 'active' class to the new item
    items[currentIndex].classList.add('active');

    // Update carousel position
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPopup(imageUrl) {
  const popup = document.getElementById('popup');
  const popupImage = document.getElementById('popup-image');

  // Set the image source
  popupImage.src = imageUrl;

  // Show the popup
  popup.style.display = 'flex';
}

function hidePopup() {
  const popup = document.getElementById('popup');
  
  // Hide the popup
  popup.style.display = 'none';
}

// 等待網頁所有資源加載完成後執行
window.addEventListener('load', function () {
  // 隱藏 loading 動畫
  const loading = document.getElementById('loading-wrapper');
  loading.style.display = 'none';

  // 顯示內容
  document.body.classList.remove('loading-wrapper');
});


//480 768s