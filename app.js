function showInput(num) {
  var show = document.getElementById("calculator");
  show.value += num;
}
function clearInput() {
  var clean = document.getElementById("calculator");
  clean.value = "";
}
function calculateInput() {
  var result = document.getElementById("calculator");
  result.value = eval(result.value);
}
