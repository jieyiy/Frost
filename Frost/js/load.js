window.onload = function() {


    // 檢查是否已經顯示過過渡畫面
    if (!sessionStorage.getItem('loadingDone')) {
      // 顯示 loading 畫面
      var loadingWrapper = document.getElementById('loading-wrapper');
      var mainContent = document.getElementById('main-content');
      
      // 設定 3 秒後顯示主內容並隱藏 loading
      setTimeout(function() {
        loadingWrapper.style.display = 'none'; // 隱藏 loading
        mainContent.style.display = 'block';   // 顯示主內容
  
        // 標記已經顯示過 loading 畫面
        sessionStorage.setItem('loadingDone', 'true');
      }, 2000); // 3 秒後顯示主內容
    } else {
      // 如果已經顯示過過渡畫面，直接顯示主內容
      document.getElementById('loading-wrapper').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    }
  };