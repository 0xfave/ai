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

// Tooltip and tab functionality
const tooltipItems = document.querySelectorAll(".tooltip-item");
const useCaseTabs = document.querySelectorAll(".use-case-btn");
const useCaseContents = document.querySelectorAll(".use-case-content");
const useCasesSection = document.querySelector("#use-cases");

// Function to activate tab and scroll to section
function activateTab(tabIndex) {
  // Remove active class from all tabs and contents
  useCaseTabs.forEach((tab) => tab.classList.remove("active"));
  useCaseContents.forEach((content) => content.classList.remove("active"));

  // Activate the selected tab and content
  useCaseTabs[tabIndex].classList.add("active");
  useCaseContents[tabIndex].classList.add("active");

  // Close tooltips
  const desktopTooltip = document.getElementById("useCasesTooltip");
  const mobileTooltip = document.querySelector(".mobile-tooltip");

  if (desktopTooltip) desktopTooltip.classList.remove("active");
  if (mobileTooltip) mobileTooltip.classList.remove("active");

  // Scroll to section
  const useCasesSection = document.getElementById("use-cases");
  if (useCasesSection) {
    const headerOffset = 100; // Adjust this value based on your header height
    const elementPosition = useCasesSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

// Map tooltip items to their respective tabs
const tabMap = {
  security: 0,
  daos: 1,
  charities: 2,
  insurance: 3,
  antifud: 4,
  ai: 5,
};

// Add click handlers to tooltip items
tooltipItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const tabId = item.getAttribute("data-tab");
    if (tabId && tabMap.hasOwnProperty(tabId)) {
      activateTab(tabMap[tabId]);
    }
  });
});

// Also handle mobile tooltip items
const mobileTooltipItems = document.querySelectorAll(".mobile-tooltip a");
mobileTooltipItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const tabId = item.getAttribute("data-tab");
    if (tabId && tabMap.hasOwnProperty(tabId)) {
      activateTab(tabMap[tabId]);
    }
  });
});
