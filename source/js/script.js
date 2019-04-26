var header = document.querySelector('.page-header');
var toggle = header.querySelector('.page-header__toggle');

toggle.addEventListener('click', function () {
  if (header.classList.contains('page-header--menu-closed')) {
    header.classList.remove('page-header--menu-closed');
  } else {
    header.classList.add('page-header--menu-closed');
  }
});
