window.onload = function() {
    const loadingOverlay = document.getElementById('loading-wrapper');
    const content = document.getElementById('wrapper');
    
  
    // 先顯示 loading 層
    loadingOverlay.style.display = 'flex';
  
    // 檢查頁面是否已經完全加載
    if (document.readyState === 'complete') {
     
      setTimeout(() => {
        // 隱藏 loading 層，顯示頁面內容
        loadingOverlay.style.display = 'none';
        content.style.display = 'block';
      },500);  // 顯示 1 秒鐘，然後隱藏 loading 層
    }
}