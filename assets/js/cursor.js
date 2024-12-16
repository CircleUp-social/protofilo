// Folder path and cursor files
const cursorImages = [
    './assets/cursor/cur1.png',
    './assets/cursor/cur2.png',
    './assets/cursor/cur3.png',
    './assets/cursor/cur4.png',
    './assets/cursor/cur5.png',
    './assets/cursor/cur6.png',
    './assets/cursor/cur7.png',
    './assets/cursor/cur8.png',
    './assets/cursor/cur9.png',
    './assets/cursor/cur10.png',
    './assets/cursor/cur11.png',
    './assets/cursor/cur12.png',
    './assets/cursor/cur13.png',
    './assets/cursor/cur14.png'
];

// Function to change cursor
let currentCursorIndex = 0;

function changeCursor() {
    console.log("Changing cursor to: " + cursorImages[currentCursorIndex]);  // Console log to check
    const body = document.querySelector('body');
    body.style.cursor = `url("${cursorImages[currentCursorIndex]}") 16 16, auto`; // Custom cursor for entire body
    currentCursorIndex = (currentCursorIndex + 1) % cursorImages.length; // Loop back to the start
}

// Set the initial cursor immediately on page load
changeCursor();

// Change cursor every 10 seconds (10000 milliseconds)
setInterval(changeCursor, 10000);
