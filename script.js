function sendMsg(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const status = document.getElementById("status");

  status.textContent = `Thanks, ${name}! Your message has been sent (demo only).`;

  e.target.reset();
}
