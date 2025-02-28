//
// get input filed value
function getInputValueById(id) {
  let value = document.getElementById(id).value;
  let convertedValue = parseFloat(value);
  return convertedValue;
}

// get tag element innerText
function getInnerTextById(id) {
  let value = document.getElementById(id).innerText;
  let convertedValue = parseFloat(value);
  return convertedValue;
}

//
function setInnerTextByIdandValue(id, value) {
  document.getElementById(id).innerText = value;
}

// set toggle block and none function
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
