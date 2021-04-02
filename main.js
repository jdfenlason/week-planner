var $modal = document.querySelector('.modal-container');
var $overlay = document.querySelector('.overlay');
var $submitBtn = document.querySelector('.submit-btn');
var $entryBtn = document.querySelector('.entry-btn');
var $container = document.querySelector('.container');
var upDown = false;

$entryBtn.addEventListener('click', function (e) {
  if (upDown === false) {
    $modal.className = 'modal-container hidden';
    $overlay.className = 'overlay hidden';
    $container.className = 'container';
    upDown = true;
  } else {
    $modal.className = 'modal-container';
    $overlay.className = 'overlay';
    $container.className = 'container hidden';
    upDown = false;
  }

});
