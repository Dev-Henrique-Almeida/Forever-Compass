function populateDateFields() {
  var daySelect = document.getElementById("day");
  var monthSelect = document.getElementById("month");
  var yearSelect = document.getElementById("year");

  for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (var i = 0; i < months.length; i++) {
    var option = document.createElement("option");
    option.value = months[i];
    option.textContent = months[i];
    monthSelect.appendChild(option);
  }

  for (var i = 1950; i <= 2023; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }
  var currentYear = new Date().getFullYear();
  var isLeapYear =
    (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0;
}

window.onload = populateDateFields;
