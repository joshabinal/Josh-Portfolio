document.addEventListener("DOMContentLoaded", function() {
    const words = ["Graphic Designer", "Web Developer", "Frontend Developer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
        currentWord = words[i];
        if (isDeleting) {
            document.getElementById("typewriter").innerHTML = currentWord.substring(0, j - 1) + '<span style="color: #777;">|</span>'; // Add gray cursor
            j--;
            if (j == 0) {
                isDeleting = false;
                i++;
                if (i == words.length) {
                    i = 0;
                }
                setTimeout(type, 500); // Delay before typing the next word
            } else {
                setTimeout(type, 100);
            }
        } else {
            document.getElementById("typewriter").innerHTML = currentWord.substring(0, j + 1) + '<span style="color: #777;">|</span>'; // Add gray cursor
            j++;
            if (j == currentWord.length) {
                isDeleting = true;
                setTimeout(type, 1000); // Delay before erasing the text
            } else {
                setTimeout(type, 100);
            }
        }
    }

    type();
});