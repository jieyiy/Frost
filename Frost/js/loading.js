window.onload = function() {
  const loadingOverlay = document.getElementById('loading-wrapper');
  const content = document.getElementById('wrapper');
  
  // 先显示 loading 层
  loadingOverlay.style.display = 'flex';

  // 检查页面是否已经完全加载
  if (document.readyState === 'complete') {
    setTimeout(() => {
      // 添加 淡出+圆形缩放 动画类
      loadingOverlay.classList.add('fade-zoom-out');
      
      // 等待动画完成后隐藏 loading 层，显示页面内容
      setTimeout(() => {
        loadingOverlay.style.display = 'none';
        content.style.display = 'block';
      }, 200); // 动画持续时间
    }, 300);  // 显示 500 毫秒，再开始动画
  }
}
