
// DONUT SKILL ANIMATION

document.addEventListener("DOMContentLoaded", function () {

    const donuts = document.querySelectorAll(".donut");

    donuts.forEach(donut => {
        const target = parseInt(donut.getAttribute("data-percent"));
        let current = 0;

        const interval = setInterval(() => {
            if (current >= target) {
                clearInterval(interval);
            } else {
                current++;
                donut.style.setProperty("--percent", current);
                donut.querySelector("span").textContent = current + "%";
            }
        }, 15);
    });

  
    // CONTACT FORM VALIDATION
    
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        if (nameInput.value.trim() === "") {
            alert("Name is required.");
            return;
        }

        if (
            emailInput.value.trim() === "" ||
            !emailInput.value.includes("@")
        ) {
            alert("Please enter a valid email address.");
            return;
        }

        if (messageInput.value.trim() === "") {
            alert("Message cannot be empty.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });
});


// MOBILE MENU TOGGLE

function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("show");
}


