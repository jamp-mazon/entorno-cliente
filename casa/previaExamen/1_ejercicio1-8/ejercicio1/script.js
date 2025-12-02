document.addEventListener('DOMContentLoaded', init);

function init(event) {
  const status = document.getElementById('status');
  status.textContent = `App lista (evento: ${event.type})`;


}