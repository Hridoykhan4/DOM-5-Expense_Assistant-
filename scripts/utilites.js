function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function showElementById(id) {
  document.getElementById(id).classList.remove("hidden");
}

function hideElementById(id) {
  document.getElementById(id).classList.add("hidden");
}
