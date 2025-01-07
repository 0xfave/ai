// Mobile menu functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  // Toggle menu on button click
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent event from bubbling
    mobileMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileMenu.classList.remove("active");
    }
  });
}

// Tab functionality
const tabButtons = document.querySelectorAll(".use-case-btn");
const tabContents = document.querySelectorAll(".use-case-content");

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));
    button.classList.add("active");
    tabContents[index].classList.add("active");
  });
});

// Form submission handling
const waitlistForm = document.querySelector(".waitlist-form");
const successMessage = document.querySelector(".success-message");

if (waitlistForm) {
  waitlistForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(waitlistForm);
    const data = Object.fromEntries(formData);

    try {
      // Hide form and show success message
      waitlistForm.style.display = "none";
      successMessage.classList.add("active");
    } catch (error) {
      console.error("Error:", error);
      // Handle error (show error message to user)
    }
  });
}

// Add tooltip functionality
const useCasesBtn = document.getElementById("useCasesBtn");
const tooltip = document.getElementById("useCasesTooltip");

if (useCasesBtn && tooltip) {
  // Show on hover
  useCasesBtn.addEventListener("mouseenter", () => {
    tooltip.classList.add("active");
  });

  // Hide when mouse leaves dropdown area
  document.querySelector(".dropdown").addEventListener("mouseleave", () => {
    tooltip.classList.remove("active");
  });

  // Toggle on click for mobile
  useCasesBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    tooltip.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", () => {
    tooltip.classList.remove("active");
  });
}

// Add mobile tooltip functionality
const useCasesLink = document.querySelector(".use-cases-link");
const mobileTooltip = document.querySelector(".mobile-tooltip");

if (useCasesLink && mobileTooltip) {
  useCasesLink.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    mobileTooltip.classList.toggle("active");

    // Rotate arrow icon
    const arrow = useCasesLink.querySelector("svg");
    arrow.style.transform = mobileTooltip.classList.contains("active")
      ? "rotate(180deg)"
      : "rotate(0)";
  });
}
