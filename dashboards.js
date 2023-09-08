var menu = document.querySelector(".menuu");
var hamburger = document.querySelector(".hamburger");
var showAnnounce = document.querySelector(".announce");
var showAlert = document.querySelector(".alertt");
var customCheckboxes = document.querySelectorAll(".custom-checkbox");
var alertNum = document.getElementById("alertNum"); // Get the alertNum element

// Function to initialize the count
function initializeLiveCount() {
    var checkedCount = document.querySelectorAll(".alertt .custom-checkbox .icon-minus").length;
    alertNum.textContent = checkedCount.toString();
  }
  
  // Call the initialization function when the page loads
  window.addEventListener("load", initializeLiveCount);
  

// Function to update the live count
function updateLiveCount() {
  var checkedCount = document.querySelectorAll(" .alertt .custom-checkbox .icon-minus").length;
  alertNum.textContent = checkedCount.toString();
}



document.addEventListener("DOMContentLoaded", function () {
    const alertNum = document.getElementById("alertNum");
    const announceNum = document.getElementById("announceNum"); // Get the announceNum element
  
    // Function to update the live count for alerts
    function updateAlertCount() {
      const alertCount = document.querySelectorAll(".alertt .yellow.default .icon-minus").length;
      alertNum.textContent = alertCount.toString();
    }
  
    // Function to update the live count for announcements
    function updateAnnounceCount() {
      const announceCount = document.querySelectorAll(".announce .yellow.default .icon-minus").length;
      announceNum.textContent = announceCount.toString();
    }
  
    // Function to initialize the counts
    function initializeLiveCounts() {
      updateAlertCount();
      updateAnnounceCount();
    }
  
    // Call the initialization function when the page loads
    initializeLiveCounts();
  
    // Add mouseover event to the alert icon for alerts count
    const alertNot = document.getElementById("alert");
    alertNot.addEventListener("mouseover", updateAlertCount);
  
    // Add mouseout event to reset the alert count when not hovering over the icon
    alertNot.addEventListener("mouseout", initializeLiveCounts);
  
    // Add mouseover event to the announcement icon for announcements count
    const announcement = document.getElementById("announcement");
    announcement.addEventListener("mouseover", updateAnnounceCount);
  
    // Add mouseout event to reset the announcement count when not hovering over the icon
    announcement.addEventListener("mouseout", initializeLiveCounts);
  
    // Function to handle checkbox clicks for alerts
    function toggleAlertCheckbox(event) {
      event.preventDefault();
      const checkboxContainer = event.target.closest(".alertt .custom-checkbox");
      if (checkboxContainer) {
        checkboxContainer.classList.toggle("checked");
        // Update the alert count when a checkbox is clicked
        updateAlertCount();
      }
      const yellowish = event.target.closest(".default");
      yellowish.classList.toggle('yellow');
    }
  
    // Function to handle checkbox clicks for announcements
    function toggleAnnounceCheckbox(event) {
      event.preventDefault();
      const checkboxContainer = event.target.closest(".announce .custom-checkbox");
      if (checkboxContainer) {
        checkboxContainer.classList.toggle("checked");
        // Update the announcement count when a checkbox is clicked
        updateAnnounceCount();
      }
      const yellowish = event.target.closest(".default");
      yellowish.classList.toggle('yellow');
    }
  
    // Add click event to all alert checkboxes
    const alertCheckboxes = document.querySelectorAll(".alertt .custom-checkbox");
    alertCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("click", toggleAlertCheckbox);
    });
  
    // Add click event to all announcement checkboxes
    const announceCheckboxes = document.querySelectorAll(".announce .custom-checkbox");
    announceCheckboxes.forEach(function (checkbox) {
      checkbox.addEventListener("click", toggleAnnounceCheckbox);
    });
  });
  

customCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("mouseover", function (event) {
    var checkboxContainer = event.target.closest(".custom-checkbox");
    if (checkboxContainer) {
      checkboxContainer.classList.add("hovered");
    }
  });

  checkbox.addEventListener("mouseout", function (event) {
    var checkboxContainer = event.target.closest(".custom-checkbox");
    if (checkboxContainer) {
      checkboxContainer.classList.remove("hovered");
    }
  });

  checkbox.addEventListener("click", function (event) {
    event.preventDefault();
    var checkboxContainer = event.target.closest(".custom-checkbox");
    if (checkboxContainer) {
      checkboxContainer.classList.toggle("checked");
      updateLiveCount(); // Update the live count when the checkbox is toggled
    }
    const yellowish = event.target.closest(".default");
    yellowish.classList.toggle('yellow');
  });
});

var menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("mouseover", function () {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

var alertNot = document.querySelector("#alert");
alertNot.addEventListener("mouseover", function (event) {
  alertNum.classList.add("invisible");
  showAlert.classList.toggle("alert_active");

  event.stopPropagation();
  showAnnounce.classList.remove("alert_active");
  menu.classList.remove("active");
  hamburger.classList.remove("active");
});

var announcement = document.getElementById("announcement");
announcement.addEventListener("mouseover", function (event) {
  var announceNum = document.getElementById("announceNum");
  announceNum.classList.add("invisible");
  showAnnounce.classList.toggle("alert_active");

  event.stopPropagation();
  showAlert.classList.remove("alert_active");
  menu.classList.remove("active");
  hamburger.classList.remove("active");
});

document.addEventListener("mouseover", function (event) {
  if (!showAnnounce.contains(event.target)) {
    showAnnounce.classList.remove("alert_active");
  }
  if (!showAlert.contains(event.target)) {
    showAlert.classList.remove("alert_active");
  }

  if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

const container = document.getElementById("container");

fetch("./dashboard.json")
  .then((response) => response.json())
  .then((data) => Render(data));

const Render = (contents) => {
  contents.forEach((content) => {
    const cards = `
    <div class="c2"  ${content.isExpired ? `id="special"` : ``}>
      ${content.isExpired ? `<span class="expire">EXPIRED</span>` : ``}
        <div class="card-content">
          
            <img class="title-image" src= ${content.courseImg} alt="">
            
                <div class="inner-content">
                    <div class="content-1">
                        <p class="course-title">${content.courseTitle}</p>
                        <img class="favorite" src=${content.starImg} alt="">
                    </div>
                    
                    <div class="content-3">
                        <p class="sub">${content.subject}</p>
                        <div class="v2"></div>
                        <p  class="sub">Grade&nbsp</p>
                        <p  class="sub">${content.grade}</p>
                        <p  class="sub">&nbsp+</p>
                      
                        <p  class="extend">${content.level}</p>
                    </div>
                    <div class="content-3">
                        <p class="num">${content.units}</p>
                        <p class="info">Units</p>
                        <p  class="num">${content.lessons}</p>
                        <p class="info">Lessons</p>
                        <p  class="num">${content.topics}</p>
                        <p class="info">Topics</p>
                    </div>
  
                    <div class="auth">
                        <select id="districts" name="districts" class="auth-name" >
                            <option value="" disabled selected>Select Classes</option>
                            <option value="Mr. Frank's Class A">${
                              content.authName[0]
                            }</option>
                            <option value="Mr. Frank's Class B">${
                              content.authName[1]
                            }</option>
                            <option value="All Classes">${
                              content.authName[2]
                            }</option>
                            <option value="No Classes">${
                              content.authName[3]
                            }</option>
                        </select>
                    </div>
  
                    <div class="content-3">
                        ${
                          content.students == null
                            ? ``
                            : `<p class="sub">${content.students}</p>`
                        }
                        ${
                          content.students == null
                            ? ``
                            : `<p class="sub">&nbspStudents</p>`
                        }
                        ${
                          content.startDate == null
                            ? ``
                            : `<div class="v2"></div> <p  class="sub">${content.startDate} - ${content.endDate}</p>`
                        }
                    </div>
                </div>
            
        </div>
        <div class="card-footer">
            
            <img  ${
              content.preview ? `class="blur"` : ``
            } style="height: 30px;" src="../Assets/icons/preview.svg" alt="">
            <img  ${
              content.course ? `class="blur"` : ``
            } style="height: 25px;" src="../Assets/icons/manage course.svg" alt="">
            <img  ${
              content.submissions ? `class="blur"` : ``
            } style="height: 25px;" src="../Assets/icons/grade submissions.svg" alt="">
            <img  ${
              content.reports ? `class="blur"` : ``
            } style="height: 30px;" src="../Assets/icons/reports.svg" alt="">
            
        </div>
        </div>
    `;

    container.insertAdjacentHTML("beforeend", cards);
  });
};
