let count=1
document.addEventListener('DOMContentLoaded', function() {  
    document.getElementById('add').addEventListener('click', addParticipant);
    document.querySelector('form').addEventListener('submit', submitForm);
});

function addParticipant() {
    let original = document.querySelector('.participant1');
    let clone = original.cloneNode(true);
    count++;
    clone.querySelector('#count').textContent = count; // Update participant count display
    clone.querySelector('#fname').value = "";
    clone.querySelector('#activity').value = "";
    clone.querySelector('#fee').className = "fee"; // Ensure the fee input has a class for easy selection
    clone.querySelector('#date').value = "";
    clone.id = `participant${count}`; // Assign unique ID to cloned section
    document.querySelector('.participants').appendChild(clone);
}


function submitForm(event) {
    event.preventDefault(); 
    if (validateForm()) {
        displaySummary()
        let form=document.getElementById('form')
        form.style.display='none'
    } else {
        alert("Please fill all required fields.");
    }
}

function validateForm() {
    return true;
}

function displaySummary() {
    const total = totalFees();
    let adultname = document.getElementById('adult_name').value;
    let template = successtemplate({name: adultname, fee: total}, count);
    document.getElementById('summary').innerHTML = template;
}


function totalFees() {
    // Using a class-based selector if IDs are not unique
    let feeElements = document.querySelectorAll(".fee");
    feeElements = Array.from(feeElements); // Convert NodeList to Array
    const total = feeElements.reduce((sum, element) => sum + (parseInt(element.value) || 0), 0);
    return total;
}

import { successtemplate } from './Templates.js';

