// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Adjust the viewport boundaries
    const topBoundary = -500;
    const bottomBoundary = windowHeight + 300;

    return (
        rect.top >= topBoundary &&
        rect.left >= 0 &&
        rect.bottom <= bottomBoundary &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get the about image 
const scrollAbout = document.querySelectorAll('.scrollTransition');

// Function to handle scroll and reveal effect
// function handleScrollReveal() {
//     if (isInViewport(aboutImage)) {
//         aboutImage.classList.add('animate-translate');
//         aboutImage.classList.add('reveal');

//     } else {
//         aboutImage.classList.remove('animate-translate');
//         aboutImage.classList.remove('reveal');
//     }
// }

function handleScrollRevealAbout(){
    scrollAbout.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate-translate');
            element.style.visibility = 'visible';
            console.log("aaaa",scrollAbout);
    
        } else {
            element.classList.remove('animate-translate');
            element.style.visibility = 'hidden';
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollRevealAbout);

// Initial check on page load
handleScrollRevealAbout();


const skillImageL = document.querySelector('.scrollTransitionL');

function handleScrollRevealL() {
    console.log("iii",skillImageL);
    if (isInViewport(skillImageL)) {
        skillImageL.classList.add('animate-translateL');
        skillImageL.style.visibility = 'visible';

    } else {
        skillImageL.classList.remove('animate-translateL');
        skillImageL.style.visibility = 'hidden';
    }
}
// Add scroll event listener
window.addEventListener('scroll', handleScrollRevealL);

// Initial check on page load
handleScrollRevealL();


const skillImageR = document.querySelector('.scrollTransitionR');

function handleScrollRevealR() {
    console.log("iii",skillImageL);
    if (isInViewport(skillImageR)) {
        skillImageR.classList.add('animate-translateR');
        skillImageR.style.visibility = 'visible';

    } else {
        skillImageR.classList.remove('animate-translateR');
        skillImageR.style.visibility = 'hidden';
    }
}
// Add scroll event listener
window.addEventListener('scroll', handleScrollRevealR);

// Initial check on page load
handleScrollRevealR();


//Dark Mode
document.addEventListener("DOMContentLoaded", function() {
    // Check if a theme is stored in local storage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.classList.add(savedTheme);
    }

    // Add click event listener to toggle theme
    document.getElementById("toggleButton").addEventListener("click", function() {
        // Toggle theme class
        document.documentElement.classList.toggle("theme-dark");

        // Store theme in local storage
        const currentTheme = document.documentElement.classList.contains("theme-dark") ? "theme-dark" : "";
        localStorage.setItem("theme", currentTheme);
    });
});
