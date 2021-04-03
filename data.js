// var planner = [
//   {
//     day: 'Sunday',
//     time: [],
//     description: []
//   },
//   {
//     day: 'Monday',
//     time: [],
//     description: []
//   },
//   {
//     day: 'Tuesday',
//     time: [],
//     description: []
//   },
//   {
//     day: 'Wednesday',
//     time: [],
//     description: []
//   },
//   {
//     day: 'Thursday',
//     time: [],
//     description: []
//   },
//   {
//     day: 'Friday',
//     time: [],
//     description: []
//   },
//   {
//     day: 'Saturday',
//     time: [],
//     description: []
//   }
// ];

var planner = {
  entries: []
};

var storage = localStorage.getItem('weekly-planner');
if (storage !== null) {
  planner = JSON.parse(storage);
}

window.addEventListener('beforeunload', function (event) {
  var transformToJSON = JSON.stringify(planner);
  localStorage.setItem('weekly-planner', transformToJSON);
});
