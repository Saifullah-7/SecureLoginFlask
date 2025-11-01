// ✅ Global function for checkbox toggle
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  if (input) {
    const type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
  }
}

// ✅ Optional: Auto-dismiss alerts
document.addEventListener("DOMContentLoaded", function () {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => {
    setTimeout(() => {
      alert.classList.remove("show");
    }, 5000);
  });
});
