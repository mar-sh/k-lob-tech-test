const div = document.querySelectorAll("DIV");

const handleClick = function() {
  alert(this.innerHTML);
}

div.forEach((el) => {
  el.addEventListener('click', handleClick)
});
