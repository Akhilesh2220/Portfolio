// ==================================DARK_MODE_TOGGLE====================================
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


// ============================TO_CHECK_IF_IN_VIEWPORT_OR_NOT=============================


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


// ============================SCROLL_DOWN_ANIMATION============================

const scrollDown = document.querySelectorAll('.scrollTransition');


function handleScrollRevealAbout(){
    scrollDown.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate-translate');
            element.style.visibility = 'visible';    
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


// ========================SCROLL_FROM_LEFT_ANIMATION==============================


const scrollFromLeft = document.querySelector('.scrollTransitionL');

function handleScrollRevealL() {
    console.log("iii",scrollFromLeft);
    if (isInViewport(scrollFromLeft)) {
        scrollFromLeft.classList.add('animate-translateL');
        scrollFromLeft.style.visibility = 'visible';

    } else {
        scrollFromLeft.classList.remove('animate-translateL');
        scrollFromLeft.style.visibility = 'hidden';
    }
}
// Add scroll event listener
window.addEventListener('scroll', handleScrollRevealL);

// Initial check on page load
handleScrollRevealL();


// ========================SCROLL_FROM_RIGHT_ANIMATION==============================


const scrollFromRight = document.querySelector('.scrollTransitionR');

function handleScrollRevealR() {
    if (isInViewport(scrollFromRight)) {
        scrollFromRight.classList.add('animate-translateR');
        scrollFromRight.style.visibility = 'visible';

    } else {
        scrollFromRight.classList.remove('animate-translateR');
        scrollFromRight.style.visibility = 'hidden';
    }
}
// Add scroll event listener
window.addEventListener('scroll', handleScrollRevealR);

// Initial check on page load
handleScrollRevealR();


