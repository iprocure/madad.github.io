// Function to handle content display and active button switching

function showContent(event) {
  const target = event.target.getAttribute("data-target");

  // Hide all content sections
  const contents = document.querySelectorAll(".content");
  contents.forEach((content) => content.classList.remove("active"));

  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll(".button-group button");
  buttons.forEach((button) => button.classList.remove("active"));

  // Show the clicked section
  document.getElementById(target).classList.add("active");

  // Add 'active' class to the clicked button
  event.target.classList.add("active");
}

// Attach event listeners to buttons
const buttons = document.querySelectorAll(".button-group button");
buttons.forEach((button) => {
  button.addEventListener("click", showContent);
});

document.addEventListener("DOMContentLoaded", () => {
  const process = document.querySelector(".process");
  const steps = document.querySelectorAll(".step");
  const solidLine = document.querySelector(".solid-line");
  const arrow = document.querySelector(".arrow");
  const section3 = document.querySelector(".section-3");

  let isSection3Visible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isSection3Visible = true;
          updateProgress();
        } else {
          isSection3Visible = false;
          solidLine.style.height = "0";
          arrow.style.top = "0";
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(section3);

  function updateProgress() {
    if (!isSection3Visible) return;

    const scrollPosition = window.scrollY;
    const section3Top = section3.offsetTop;
    const section3Height = section3.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollPercentage = Math.max(
      0,
      Math.min(
        100,
        ((scrollPosition - section3Top + windowHeight) / section3Height) * 100
      )
    );

    solidLine.style.height = `${scrollPercentage}%`;
    arrow.style.top = `${scrollPercentage}%`;

    steps.forEach((step, index) => {
      const stepTop = step.offsetTop - process.offsetTop;
      const stepHeight = step.offsetHeight;
      const stepMiddle = stepTop + stepHeight / 2;
      const stepPercentage = (stepMiddle / process.offsetHeight) * 100;

      if (scrollPercentage >= stepPercentage) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateProgress);
  window.addEventListener("resize", updateProgress);
  updateProgress();
});

// Function to toggle collapsible content and rotate the arrow
function toggleContent(arrow) {
  const content = arrow.parentElement.nextElementSibling; // Get the related content
  const isOpen = content.style.display === "block"; // Check if content is already open

  // Toggle visibility
  content.style.display = isOpen ? "none" : "block";

  // Rotate the arrow
  arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

document.getElementById("hamburger").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});


document.getElementById("footerLogo").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


  // Get modal and buttons
document.addEventListener('DOMContentLoaded', () => {
  // Call the validation function for the modal form
  setupFormValidation();
  // Get modal and buttons
  const modal = document.getElementById('joinWaitlistModal');
  const openModalButtons = document.querySelectorAll('.nav-button');
  const closeModalButton = document.getElementById('closeModal');

  const mobileMenu = document.getElementById("mobile-menu");

   // Open modal on button click for all buttons
  openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      console.log('Open modal button clicked');
      e.preventDefault(); // Prevent default link behavior
      modal.classList.remove('hidden'); // Show modal
      mobileMenu.classList.add('hidden'); // Hide mobile menu
    });
  });

  // Close modal on button click
  closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // Close modal when clicking outside of the modal content
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
  
});

function setupFormValidation() {
  const emailForms = document.querySelectorAll("form");
  const modal = document.getElementById("joinWaitlistModal");

  emailForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');

      const errorMessage = form.nextElementSibling;
      const email = emailInput.value.trim();

      // Clear previous errors
      errorMessage.textContent = "";
      errorMessage.hidden = true;

      // Add input event to clear the error while typing
      emailInput.addEventListener("input", () => {
        errorMessage.textContent = "";
        errorMessage.hidden = true;
      });

      // Validate if email field is empty
      if (!email) {
        errorMessage.textContent = "Please enter an email address.";
        errorMessage.hidden = false;
        emailInput.focus();
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.hidden = false;
        emailInput.focus();
        return;
      }

      // Send a custom event to GA4
      if (typeof gtag === "function") {
        gtag("event", "join_waitlist", {
          email: email, // Custom parameter
        });
      } else {
        console.warn("Google Analytics (gtag) is not initialized.");
      }

      // Send email using EmailJS
      emailjs.send("service_ryq4xz6", "template_b2ce9mp", {
          email: email, // Template parameter
        })
        .then(() => {
          // Show success toast
          const toastContainer = document.getElementById("toast-container");
          if (toastContainer) {
            toastContainer.classList.remove("hidden");
            toastContainer.classList.add("show-toast");

            if (modal) {
              modal.classList.add("hidden"); // Close the modal
            }

            setTimeout(() => {
              toastContainer.classList.remove("show-toast");
              toastContainer.classList.add("hidden");

              emailInput.value = "";
            }, 3000);
          }
        })
        .catch((error) => {
          console.error("Failed to send email:", error);
          errorMessage.textContent = "Failed to send email. Please try again.";
          errorMessage.hidden = false;
        });
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  setupFormValidation();
});


function setupToastClose() {
  const toastContainer = document.getElementById("toast-container");
  const closeIcon = toastContainer.querySelector(".close_icon");

  if (closeIcon) {
    closeIcon.addEventListener("click", () => {
      toastContainer.classList.remove("show-toast"); // Remove the class to hide the toast
      toastContainer.classList.add("hidden"); // Fully hide the toast
      // Clear the email input field

      const emailInput = document.querySelector('form input[type="email"]');
      if (emailInput) {
        emailInput.value = "";
      }
      const formContainers = document.querySelectorAll('.form-container')

      if(formContainers && formContainers.length > 0) {
        formContainers.forEach(form => {
          const emailInput = form.querySelector('input[type="email"]');
          if (emailInput) {
            emailInput.value = ""; 
          }
        });
      }    
    });
  }
}

setupToastClose()


