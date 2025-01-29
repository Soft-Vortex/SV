function toggleStep(stepNum) {
  const step = document.getElementById(`step${stepNum}`);
  const successMsg = document.getElementById('successMsg');


  if (step.style.display === 'none' || step.style.display === '') {
    step.style.display = 'block'; 
  } else {
    step.style.display = 'none'; 
  }


  if (document.querySelectorAll('.step-d[style="display: block;"]').length === 4) {
    successMsg.style.display = 'block'; 
  }
}


function toggleImage(imageNum) {
  const imageDiv = document.getElementById(`image${imageNum}`);
  if (imageDiv.style.display === 'none' || imageDiv.style.display === '') {
    imageDiv.style.display = 'block'; 
  } else {
    imageDiv.style.display = 'none';
  }
}
