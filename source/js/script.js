var header = document.querySelector('.page-header');
var toggle = header.querySelector('.page-header__toggle');

header.classList.remove('page-header--nojs');

toggle.addEventListener('click', function() {
  if (header.classList.contains('page-header--menu-closed')) {
    header.classList.remove('page-header--menu-closed');
    header.classList.add('page-header--menu-opened');
  } else {
    header.classList.add('page-header--menu-closed');
    header.classList.remove('page-header--menu-opened');
  }
});
