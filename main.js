var $modal = document.querySelector('.modal-container');
var $modalContent = document.querySelector('.modal-content');
var $overlay = document.querySelector('.overlay');
var $submitBtn = document.querySelector('.submit-button');
var $entryBtn = document.querySelector('.entry-btn');
var $container = document.querySelector('.container');
var $form = document.querySelector('form');
var upDown = false;

$entryBtn.addEventListener('click', function (e) {
  if (upDown === false) {
    $container.className = 'container';
    $modal.className = 'modal-container hidden';
    $modalContent.className = 'modal-content hidden';
    $overlay.className = 'overlay hidden';
    upDown = true;
  } else {
    $modal.className = 'modal-container';
    $modalContent.className = 'modal-content';
    $overlay.className = 'overlay';
    $container.className = 'container hidden';
    upDown = false;
  }
});

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  var userInput = { day: $form.elements.day.value, time: $form.elements.time.value, entry: $form.elements.description.value };
  planner.entries.unshift(userInput);
  $submitBtn.addEventListener('click', function (e) {
    console.log(e.target);
    $container.className = 'container';
    $modal.className = 'modal-container hidden';
    $modalContent.className = 'modal-content hidden';
    $overlay.className = 'overlay hidden';
    upDown = true;
  });
});
