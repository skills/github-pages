// Add event listener to faculty list items
document.addEventListener("DOMContentLoaded", function () {
    const facultyList = document.querySelectorAll(".faculty-list li");

    facultyList.forEach((faculty) => {
        faculty.addEventListener("mouseover", function () {
            faculty.style.background = "#f0f0f0";
        });

        faculty.addEventListener("mouseout", function () {
            faculty.style.background = "";
        });
    });
});

// Validate email addresses
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Example usage:
const emailLinks = document.querySelectorAll(".faculty-list a[href^='mailto:']");

emailLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        const email = link.getAttribute("href").replace("mailto:", "");
        if (!validateEmail(email)) {
            console.error(`Invalid email address: ${email}`);
            event.preventDefault();
        }
    });
});
