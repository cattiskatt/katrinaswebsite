function openModal() {
  document.getElementById("projectModal").style.display = "block";
}
function openModal2() {
  document.getElementById("projectModal2").style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
  document.getElementById("projectModal2").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  const modal2 = document.getElementById("projectModal2");
  if (event.target === modal) {
    modal.style.display = "none";
  }
  if (event.target === modal2) {
    modal2.style.display = "none";
  }
};
