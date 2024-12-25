// 獲取返回頂部的按鈕
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// 設置滾動多少像素後顯示返回頂部按鈕
const scrollThreshold = 200;  // 當頁面滾動超過200px時顯示按鈕

// 當頁面滾動時顯示或隱藏按鈕
window.onscroll = function() {
  if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
    scrollToTopBtn.classList.add('show'); // 顯示按鈕
  } else {
    scrollToTopBtn.classList.remove('show'); // 隱藏按鈕
  }
};

// 當按鈕被點擊時，滾動到頁面頂部
scrollToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滾動效果
  });
};