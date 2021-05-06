/* global data */

const $modal = document.querySelector('.modal-container');
const $modalContent = document.querySelector('.modal-content');
const $overlay = document.querySelector('.overlay');
const $submitBtn = document.querySelector('.submit-button');
const $entryBtn = document.querySelector('.entry-btn');
const $container = document.querySelector('.container');
const $form = document.querySelector('form');
const $tBody = document.querySelector('tbody');
const $dayChange = document.getElementById('day-change');
const $tbody = document.querySelector('tbody');
const $cancelBtn = document.getElementById('cancel-button');

$cancelBtn.addEventListener('click', event => {
  submit();
});

const $sundayBtn = document.querySelector('#sunday');
$sundayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Sunday';
  data.view = 'Sunday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Sunday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

const $mondayBtn = document.querySelector('#monday');
$mondayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Monday';
  data.view = 'Monday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Monday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

const $tuesdayBtn = document.querySelector('#tuesday');
$tuesdayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Tuesday';
  data.view = 'Tuesday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Tuesday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

const $wednesdayBtn = document.querySelector('#wednesday');
$wednesdayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Wednesday';
  data.view = 'Wednesday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Wednesday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

const $thursdayBtn = document.querySelector('#thursday');
$thursdayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Thursday';
  data.view = 'Thursday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Thursday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

const $fridayBtn = document.querySelector('#friday');
$fridayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Friday';
  data.view = 'Friday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Friday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

const $saturdayBtn = document.querySelector('#saturday');
$saturdayBtn.addEventListener('click', event => {
  removeEntries();
  $dayChange.textContent = 'Scheduled Events for: Saturday';
  data.view = 'Saturday';
  for (let i = 0; i < data.entries.length; i++) {
    if (data.entries[i].day === 'Saturday') {
      const newCreateEntry = createEntry(data.entries[i]);
      $tBody.appendChild(newCreateEntry);
    }
  }
});

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
  const userInput = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    notes: $form.elements.notes.value,
    amPm: $form.elements.amPm.value
  };
  data.entries.unshift(userInput);
  data.nextEntryId++;
  // for (var i = 0; i < $viewDays.length; i++) {
  //   if (userInput.day === $viewDays[i].dataset.view) {
  //     $viewDays[i].appendChild(createEntry(userInput));
  //   }
  // }
}

function submit(event) {
  $container.className = 'container';
  $modal.className = 'modal-container hidden';
  $modalContent.className = 'modal-content hidden';
  $overlay.className = 'overlay hidden';
  $entryBtn.className = 'entry-btn';
}

function createEntry(object) {

  const $tr = document.createElement('tr');
  $tr.className = object.day;
  $tr.setAttribute('data-view', object.day);
  $tr.setAttribute('data-entry-id', object.day);

  const $tdTime = document.createElement('td');
  $tdTime.textContent = `${object.time} ${object.amPm}`;

  const $tdDes = document.createElement('td');
  $tdDes.textContent = object.notes;
  $tdDes.setAttribute('class', 'buttonTd');
  $tdDes.setAttribute('id', 'text-align');

  const $updateBtn = document.createElement('button');
  $updateBtn.setAttribute('class', 'update-button');
  $updateBtn.textContent = 'Update';

  const $deleteBtn = document.createElement('button');
  $deleteBtn.setAttribute('class', 'delete-button');
  $deleteBtn.textContent = 'Delete';

  $tr.appendChild($tdTime);
  $tr.appendChild($tdDes);
  $tdDes.appendChild($updateBtn);
  $tdDes.appendChild($deleteBtn);
  return $tr;
}

function entryLoad(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entryNode = createEntry(data.entries[i]);
    $tbody.append($entryNode);
  }
}

function removeEntries() {
  const trElements = $tBody.querySelectorAll('tr');
  for (let i = 0; i < trElements.length; i++) {
    trElements[i].remove();
  }
}
window.addEventListener('DOMContentLoaded', entryLoad);
