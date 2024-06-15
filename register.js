let count = 1;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', addParticipant);
    document.querySelector('form').addEventListener('submit', submitForm);
});

function addParticipant() {
    let original = document.querySelector('.participant1');
    let clone = original.cloneNode(true);
    count++;
    
    clone.querySelector('#count').textContent = count;
    clone.querySelector('#fname').value = "";
    clone.querySelector('#activity').value = "";
    clone.querySelector('#fee').className = "fee";
    clone.querySelector('#date').value = "";
    clone.id = `participant${count}`;
    
    document.querySelector('.participants').appendChild(clone);
}

function submitForm(event) {
    event.preventDefault();
    if (validateForm()) {
        displaySummary();
        document.getElementById('form').style.display = 'none';
    } else {
        alert("Please fill all required fields.");
    }
}

function validateForm() {
    return true;
}

function displaySummary() {
    const total = totalFees();
    const adultName = document.getElementById('adult_name').value;
    const template = successtemplate({name: adultName, fee: total}, count);
    
    document.getElementById('summary').innerHTML = template;
}

function totalFees() {
    const feeElements = document.querySelectorAll("input[id^='fee']");
    let total = 0;
    feeElements.forEach(element => {
        const feeValue = parseInt(element.value);
        if (!isNaN(feeValue)) {
            total += feeValue;
        }
    });
    return total;
}

import { successtemplate } from './Templates.js';
