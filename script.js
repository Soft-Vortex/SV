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

// Function to open the download link in a new tab
function downloadFile() {
  const downloadUrl = 'https://cdn.discordapp.com/attachments/1328126886735380581/1328770444806848572/hotbar.nbt?ex=679b0729&is=6799b5a9&hm=5f1e7ae63e0e1c5be4cae95618030d053079e3f8eb475b1b9479970149f8021d&';
  
  // Open the download link in a new tab
  window.open(downloadUrl, '_blank');
}
