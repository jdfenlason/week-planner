var $modal = document.querySelector('.modal-container');
var $modalContent = document.querySelector('.modal-content');
var $overlay = document.querySelector('.overlay');
var $submitBtn = document.querySelector('.submit-button');
var $entryBtn = document.querySelector('.entry-btn');
var $container = document.querySelector('.container');
var $form = document.querySelector('form');
var upDown = false;
var tbody = document.querySelector('tbody');

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
  var userInput = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value
  };
  planner.entries.unshift(userInput);

  $submitBtn.addEventListener('click', function (e) {
    $container.className = 'container';
    $modal.className = 'modal-container hidden';
    $modalContent.className = 'modal-content hidden';
    $overlay.className = 'overlay hidden';
    upDown = true;
  });

  $submitBtn.addEventListener('click', generateEntry);

});

function entry(entryData) {
  var $tr = document.createElement('tr');

  var $tdTime = document.createElement('td');
  $tdTime.textContent = entryData.time;

  var $tdDes = document.createElement('td');
  $tdDes.textContent = entryData.description;

  var $updateBtn = document.createElement('button');
  $updateBtn.setAttribute('class', 'update-button');
  $updateBtn.textContent = 'Update';

  var $deleteBtn = document.createElement('button');
  $deleteBtn.setAttribute('class', 'delete-button');
  $deleteBtn.textContent = 'Delete';

  $tr.appendChild($tdTime);
  $tr.appendChild($tdDes);
  $tr.appendChild($updateBtn);
  $tr.appendChild($deleteBtn);

  return $tr;
}

function generateEntry(object) {
  for (var i = 0; i < planner.entries.length; i++) {
    var lineItem = entry(planner.entries[i]);
    tbody.appendChild(lineItem);
    console.log('this work');
  }
}
// function generateEntry(object) {
//   for (var i = 0; i < planner.entries.length; i++) {
//     var lineItem = entry(planner.entries[i]);
//     tbody.appendChild(lineItem);
//   }
// }

// window.addEventListener('DOMContentLoaded', function (e) {

// for (var i = 0; i < planner.entries.length; i++) {
//       var lineItem = entry(planner.entries[i]);
//       tbody.appendChild(lineItem);

// });
