// Select elements
// Toggle to show the intro message
// Typing animation for intro text
const textArray = [
    "Computer Science student exploring the world of development, one line of code at a time.",
    "Turning ideas into seamless digital experiences, one step at a time.",
    "A passionate learner on the path to mastering the art of coding.",
    "Embracing challenges and opportunities to expand my skills in the digital world.",
    "On a journey to become a well-rounded developer, passionate about quality and usability."
];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 35;  // Speed of typing
const pauseTime = 2000;   // Pause between phrases
const typedTextElement = document.getElementById("typedText");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typedTextElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, pauseTime);  // Start erasing after a pause
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

// Start the typing animation when the page loads
window.onload = typeText;

// Toggle to show the intro message
function showIntro() {
    document.getElementById("welcomeMessage").classList.add("hidden");
    document.getElementById("introMessage").classList.remove("hidden");
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
}

// Toggle to show the welcome message
function showWelcome() {
    document.getElementById("introMessage").classList.add("hidden");
    document.getElementById("welcomeMessage").classList.remove("hidden");
    document.getElementById("navbar").scrollIntoView({
        behavior: "smooth"
    });
}

function showAboutMe() {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// Scroll to the top of the page
function scrollToTop() {
    document.getElementById("navbar").scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const downButton = document.getElementById("downButton");
    const sections = document.querySelectorAll("section");
    let currentSectionIndex = 0; // Start at the first section

    console.log("Script loaded. Sections found:", sections.length);

    downButton.addEventListener("click", () => {
        // Move to the next section
        currentSectionIndex++;
        console.log("Button clicked. Moving to section index:", currentSectionIndex);

        // If we're at the last section, loop back to the first section
        if (currentSectionIndex >= sections.length) {
            currentSectionIndex = 0;
            console.log("Reached last section. Looping back to section 0.");
        }

        // Scroll to the section and log the section ID
        const sectionToScrollTo = sections[currentSectionIndex];
        if (sectionToScrollTo) {
            sectionToScrollTo.scrollIntoView({ behavior: "smooth" });
            console.log("Scrolling to:", sectionToScrollTo.id);
        } else {
            console.log("Section not found.");
        }
    });
});


// Hamburger toggle functionality
const hamburger = document.querySelector(".hamburger"); // Select the hamburger icon
const navLinks = document.querySelector(".nav-links"); // Select the container for the nav links
const links = document.querySelectorAll(".nav-links li"); // Select all individual nav links

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open"); // Close the menu
    });
});
