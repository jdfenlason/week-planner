var $modal = document.querySelector('.modal-container');
var $modalContent = document.querySelector('.modal-content');
var $overlay = document.querySelector('.overlay');
var $submitBtn = document.querySelector('.submit-button');
var $entryBtn = document.querySelector('.entry-btn');
var $container = document.querySelector('.container');
var $form = document.querySelector('form');
// var $btnContainer = document.querySelector('button-container');
var $viewDays = document.querySelectorAll('tbody');
var $tbody = document.querySelector('tbody');
window.addEventListener('DOMContentLoaded', entryLoad);
var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

$entryBtn.addEventListener('click', addEntryBtn);

function addEntryBtn(event) {
  $modal.className = 'modal-container';
  $modalContent.className = 'modal-content';
  $overlay.className = 'overlay';
  $entryBtn.className = 'entry-btn hidden';
}

$form.addEventListener('submit', addEntries);

$submitBtn.addEventListener('click', submit);

function addEntries(event) {
  event.preventDefault();
  // var time = $form.elements.time.value;
  // var description = $form.elements.description.value;
  // var day = $form.elements.day.value;
  var userInput = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value
  };
  data.entries.unshift(userInput);
  data.nextEntryId++;
  for (var i = 0; i < $viewDays.length; i++) {
    if (userInput.day === $viewDays[i].dataset.view) {
      $viewDays[i].appendChild(createEntry(userInput));
    }
  }
}

function submit(event) {
  $container.className = 'container';
  $modal.className = 'modal-container hidden';
  $modalContent.className = 'modal-content hidden';
  $overlay.className = 'overlay hidden';
  $entryBtn.className = 'entry-btn';
}

function createEntry(entryData) {
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

function entryLoad(event) {
  for (var i = 0; i < data.entries.length; i++) {
    var $entryNode = createEntry(data.entries[i]);
    $tbody.append($entryNode);
  }
}

var previousDataJSON = localStorage.getItem('data-storage');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}
function storeData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-storage', dataJSON);
}

window.addEventListener('beforeunload', storeData);
