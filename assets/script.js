document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle-btn');
  var menu = document.querySelector('.nav-links');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      menu.classList.toggle('is-open');
    });
  }
});
