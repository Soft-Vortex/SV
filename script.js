function showInstallBox() {
  document.getElementById("install-box").style.display = "block";
}

function closeInstallBox() {
  document.getElementById("install-box").style.display = "none";
}

window.onclick = function(event) {
  if (event.target == document.getElementById("install-box")) {
    closeInstallBox();
  }
}
