// themes/galtheme/source/js/main.js
document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }

  // 关闭置顶通知
  const closeBtn = document.getElementById('closeNotice');
  const notice = document.getElementById('topNotice');
  if (closeBtn && notice) {
    closeBtn.addEventListener('click', function() {
      notice.style.display = 'none';
    });
  }
});