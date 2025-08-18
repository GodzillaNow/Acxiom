// Modern enhancements for navigation, buttons, and form

document.addEventListener("DOMContentLoaded", () => {
  // CTA button navigation
  document.querySelectorAll("#ctaBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  });

  // Smooth scroll for internal anchor links (if any)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form validation and fancy feedback
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Validate required fields
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const message = form.querySelector("#message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill all required fields.");
        return;
      }

      // Basic email validation
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Success feedback
      form.querySelector("button[type='submit']").disabled = true;
      form.querySelector("button[type='submit']").textContent = "Sending...";

      setTimeout(() => {
        alert("Thank you for contacting Acxiom Consulting. We'll get back to you soon.");
        form.reset();
        form.querySelector("button[type='submit']").disabled = false;
        form.querySelector("button[type='submit']").textContent = "Send Message";
      }, 1100);
    });
  }
});
