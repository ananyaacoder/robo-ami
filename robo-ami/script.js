document.addEventListener("DOMContentLoaded", () => {
  const taskList = document.getElementById("taskList");
  if (taskList) {
    taskList.innerHTML = "<li>Math Homework due on May 5</li><li>Science Project due on May 10</li>";
  }
  const marksProgress = document.getElementById("marksProgress");
  if (marksProgress) {
    marksProgress.innerText = "Math: 85%, Science: 90%, History: 75%";
  }
});