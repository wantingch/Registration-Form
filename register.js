document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add').addEventListener('click', addParticipant);
    document.querySelector('form').addEventListener('submit', submitForm);
});

function addParticipant() {
    let original = document.querySelector('.participant1');
    let clone = original.cloneNode(true);
    clone.querySelector('#fname').value = "";
    clone.querySelector('#activity').value = "";
    clone.querySelector('#fee').value = "";
    clone.querySelector('#date').value = "";
    document.querySelector('.participants').appendChild(clone);
}

function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
        displaySummary();
    } else {
        alert("Please fill all required fields.");
    }
}

function validateForm() {
    // Validate inputs and return true if all are valid
    return true; // Example validation always passes
}

function displaySummary() {
    let summary = "Registration successful!";
    document.getElementById('summary').textContent = summary;
}
