// script.js

// Function to handle button click events
var noMessages = ["JESTEŚ PEWNA?", "Na 100%?", "Na pewno pewno?", "Ostatnia szansa! 😭"];
var noClickCount = 0;
var moveNoButton = false;
function selectOption(option) {
    if (option === 'yes') {
         // Hide buttons
         document.getElementById('options').style.display = 'none';

         // Create countdown text
         var textContainer = document.getElementById('text-container');
         var countdownText = document.createElement('div');
         countdownText.id = "countdown-text";
         countdownText.style.fontSize = "40px";
         countdownText.style.marginTop = "20px";
         countdownText.innerText = "Poczekaj sekundkę... 3";
         textContainer.appendChild(countdownText);
 
         let count = 3;
         let countdownInterval = setInterval(() => {
             count--;
             if (count > 0) {
                 countdownText.innerText = `Poczekaj sekundkę... ${count}`;
             } else {
                 clearInterval(countdownInterval);
                 countdownText.innerText = "Łiiiiiiiii ❤️"; // Celebration text
                 startHeartAnimation(); // Flying hearts effect
                 
                 // Delay before showing GIFs
                 setTimeout(() => {
                     document.getElementById('question').style.display = 'none';
 
                     // Remove countdown text
                     countdownText.style.display = "none";
 
                     // Show the GIFs **before** flashing colors
                     displayCatHeart();
                     displayCornerGif();
 
                     // Now start the rainbow flash
                     flashRainbowColors();
                 }, 1000); // Short delay before everything happens
             }
         }, 1000); // Countdown every second
     } 
    else if (option === 'no') {
        var noButton = document.getElementById('no-button');

        if (noClickCount < noMessages.length) {
            noButton.innerText = noMessages[noClickCount];
            noClickCount++;
        } else {
            noButton.innerText = "Kliknij proszę tak 😡"; 
            moveNoButton = true; // Activate moving "No" button
        }

        // Increase "Yes" button size, but prevent extreme growth
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var maxFontSize = 80; // Adjusted to a more reasonable size
        var newSize = Math.min(parseFloat(currentFontSize) * 2, maxFontSize);
        yesButton.style.fontSize = newSize + 'px';
    } 
    
    else {
        alert('Invalid option!');
    }
}


// function selectOption(option) {
//     // Check which option was clicked
//     if (option === 'yes') {
//         // Flash rainbow colors
//         // flashRainbowColors(function() {
//         //     document.getElementById('question').style.display = 'none'; // Hide the question
//         //     displayCatHeart(); // Display the cat-heart.gif
//         //     displayCornerGif(); 
//         //     startHeartAnimation();
//         // });
//         document.getElementById('options').style.display = 'none';
        
//         // Create countdown text
//         var textContainer = document.getElementById('text-container');
//         var countdownText = document.createElement('div');
//         countdownText.id = "countdown-text";
//         countdownText.style.fontSize = "40px";
//         countdownText.style.marginTop = "20px";
//         countdownText.innerText = "Poczekaj sekundkę... 3";
//         textContainer.appendChild(countdownText);

//         let count = 3;
//         let countdownInterval = setInterval(() => {
//             count--;
//             if (count > 0) {
//                 countdownText.innerText = `Poczekaj sekundkę... ${count}`;
//             } else {
//                 clearInterval(countdownInterval);
//                 countdownText.innerText = "Łiiiiiiiii ❤️"; // Celebration text
//                 startHeartAnimation(); // Flying hearts
                
//                 // Start the rainbow animation and then show GIFs
//                 flashRainbowColors(function() {
//                     document.getElementById('question').style.display = 'none';
//                     displayCatHeart();
//                     displayCornerGif();
//                 });
//             }
//         }, 1000); // Update countdown every second
//     } else if (option === 'no') {
//         var noButton = document.getElementById('no-button');
//         if (noClickCount < noMessages.length) {
//             noButton.innerText = noMessages[noClickCount];
//             noClickCount++;
//         } else {
//             noButton.innerText = "Kliknij proszę tak 😡";
//             moveNoButton = true; 
//         }

//         var yesButton = document.getElementById('yes-button');
//         var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
//         var maxFontSize = 240; // Prevent it from getting too large
//         var newSize = Math.min(parseFloat(currentFontSize) * 2, maxFontSize);
//         yesButton.style.fontSize = newSize + 'px';
//     } else {
//         // If neither "Yes" nor "No" was clicked, show an alert message
//         alert('Invalid option!');
//     }
// }

// // Function to flash rainbow colors and then execute a callback function
// function flashRainbowColors(callback) {
//     var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
//     var i = 0;
//     var interval = setInterval(function() {
//         document.body.style.backgroundColor = colors[i];
//         i = (i + 1) % colors.length;
//     }, 200); // Change color every 200 milliseconds
//     setTimeout(function() {
//         clearInterval(interval);
//         document.body.style.backgroundColor = ''; // Reset background color
//         if (callback) {
//             callback();
//         }
//     }, 1900); // Flash colors for 2 seconds
// }

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'toothless.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCornerGif() {
    var gif = document.createElement('img');
    gif.src = 'htyd.gif'; // Change to your actual GIF file name
    gif.alt = 'Cute GIF';
    gif.id = 'corner-gif';
    document.body.appendChild(gif);
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cute-no-background.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}
//comment
// Display the cat.gif initially

function createFlyingHeart() {
    var heart = document.createElement('div');
    heart.className = 'flying-heart';
    heart.innerText = '❤️';
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's'; // Between 3s to 5s

    document.body.appendChild(heart);

    // Remove after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function startHeartAnimation() {
    for (let i = 0; i < 20; i++) {
        setTimeout(createFlyingHeart, i * 200); // Add a new heart every 200ms
    }
}
function moveButton(event) {
    if (moveNoButton) {
        var noButton = document.getElementById('no-button');
        var buttonRect = noButton.getBoundingClientRect();
        var offsetX = (Math.random() * 200 - 100); // Random X movement
        var offsetY = (Math.random() * 200 - 100); // Random Y movement

        var newX = buttonRect.left + offsetX;
        var newY = buttonRect.top + offsetY;

        // Prevent button from going out of bounds
        newX = Math.max(10, Math.min(window.innerWidth - buttonRect.width - 10, newX));
        newY = Math.max(10, Math.min(window.innerHeight - buttonRect.height - 10, newY));

        noButton.style.position = "absolute";
        noButton.style.left = newX + "px";
        noButton.style.top = newY + "px";
    }
}

// Attach event listener to move the button when the mouse gets close
document.addEventListener("mousemove", moveButton);
displayCat();
