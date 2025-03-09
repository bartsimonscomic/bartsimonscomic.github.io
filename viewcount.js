var conter = document.querySelector("count");
var visit = localStorage.getItem("view");
 
// Check if page_view entry is present
if (visitCount) {
  visit = Number(visit) + 1;
  localStorage.setItem("view", visit);
} else {
  visit = 1;
  localStorage.setItem("view", 1);
}
conter.innerHTML = visit;
