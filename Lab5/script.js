document.getElementById("data-form").addEventListener("submit", function(event) {
    event.preventDefault(); // for registered shipment

    const fullNameInput = document.getElementById("full-name").value.trim();
    const birthday = document.getElementById("birthday").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const telegram = document.getElementById("telegram").value.trim();

    // Regular expressions for validation
    const ukrainianNameRegex = /^[А-ЯІЇЄ][а-яіїє']+\s[А-ЯІЇЄ][а-яіїє']+\s[А-ЯІЇЄ][а-яіїє']+$/; 
    const englishNameRegex = /^([A-Z][a-z]+(\s[A-Z][a-z]+){1,2})$/; 
    const addressRegex = /^м\.\s+.+\s+вул\.\s+.+,\s*\d+(\s+кв\.\s*\d+)?$/;
    const telegramRegex = /^[a-zA-Z0-9_]{5,}$/;

    // Formatted ПІБ: capitalize each word
    const formattedFullName = fullNameInput.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');

    // Validation of the date of birth (the date must not be in the future)
    const today = new Date().toISOString().split('T')[0];

    let isValid = true;

    document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
    // Check 
    if (!(ukrainianNameRegex.test(fullNameInput) || englishNameRegex.test(fullNameInput))) {
        isValid = false;
        document.getElementById("full-name-error").style.display = "block";
    }
    if (!birthday || birthday > today) {
        isValid = false;
        document.getElementById("birthday-error").style.display = "block";
    }
    if (!addressRegex.test(address)) {
        isValid = false;
        document.getElementById("address-error").style.display = "block";
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        document.getElementById("email-error").style.display = "block";
    }
    if (!telegramRegex.test(telegram)) {
        isValid = false;
        document.getElementById("telegram-error").style.display = "block";
    }

    // Show the result or error messages
    if (isValid) {
        document.getElementById("full-name-result").innerText = formattedFullName;
        document.getElementById("birthday-result").innerText = birthday;
        document.getElementById("address-result").innerText = address;
        document.getElementById("email-result").innerText = email;
        document.getElementById("telegram-result").innerText = telegram;

        alert("Data entered successfully!");
    } else {
        alert("Please correct the errors in the form.");
    }
});

// Creating a table
const table = document.getElementById('color-table');
let cellIndex = 1;

for (let i = 0; i < 6; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 6; j++) {
        const cell = row.insertCell();
        cell.innerText = cellIndex++;

        // Random color on hover
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = getRandomColor();
        });

        // Color selection on click
        cell.addEventListener('click', function() {
            openColorPicker(cell);
        });

        // Change color of all cells in the table on double-click
        cell.addEventListener('dblclick', function() {
            changeAllCellsColor();
        });
    }
}

// A function for generating a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the color of all cells in the table
function changeAllCellsColor() {
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = getRandomColor();
        }
    }
}

// A function to open the color selection
function openColorPicker(cell) {
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.style.position = 'absolute';
    colorInput.style.opacity = 0;

    colorInput.addEventListener('input', function() {
        cell.style.backgroundColor = colorInput.value;
    });

    // Add a field for choosing a color and call a click
    document.body.appendChild(colorInput);
    colorInput.click();
}
