document.getElementById('addBookBtn').addEventListener('click', function () {
    const titleInput = document.getElementById('bookTitle').value.trim();
    const yearInput = document.getElementById('bookYear').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    const currentYear = new Date().getFullYear();

    // Validation for title (only alphabetic, no spaces)
    if (!titleInput.match(/^[A-Za-z]+$/)) {
        errorMsg.innerText = "Book title must only contain alphabetic characters, with no spaces or special characters.";
        return;
    }

    // Validation for year
    if (!yearInput.match(/^\d{4}$/)) {
        errorMsg.innerText = "Publication year must be a four-digit number.";
        return;
    }

    const year = parseInt(yearInput, 10);
    if (year < 1900 || year > currentYear) {
        errorMsg.innerText = `Year must be between 1900 and ${currentYear}.`;
        return;
    }

    // Passed validations
    errorMsg.innerText = '';

    // Create new row and cells
    const tableBody = document.querySelector('#bookTable tbody');
    const newRow = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = titleInput;

    const yearCell = document.createElement('td');
    yearCell.textContent = year;

    newRow.appendChild(titleCell);
    newRow.appendChild(yearCell);

    // Set background color
    if (year < 2000) {
        newRow.classList.add('light-gray');
    } else {
        newRow.classList.add('light-green');
    }

    tableBody.appendChild(newRow);

    // Clear inputs
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookYear').value = '';
});
