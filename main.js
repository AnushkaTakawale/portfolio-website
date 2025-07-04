function showTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById("clock").innerText = "Current Time: " + time;
  }