function toggleStep(stepNumber) {
  const stepDetails = document.getElementById(`step${stepNumber}`);
  const allSteps = document.querySelectorAll('.step-details');
  const successMessage = document.getElementById('successMessage');
  
  allSteps.forEach(step => step.style.display = 'none');
  if (stepDetails.style.display === 'none' || stepDetails.style.display === '') {
    stepDetails.style.display = 'block';
  } else {
    stepDetails.style.display = 'none';
  }
  let allCompleted = true;
  allSteps.forEach(step => {
    if (step.style.display === 'none') {
      allCompleted = false;
    }
  });
  if (allCompleted) {
    successMessage.style.display = 'block';
  } else {
    successMessage.style.display = 'none';
  }
}
