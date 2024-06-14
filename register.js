let count=1
document.addEventListener('DOMContentLoaded', function() {  
    document.getElementById('add').addEventListener('click', addParticipant);
    document.querySelector('form').addEventListener('submit', submitForm);
});

function addParticipant() {
    let original = document.querySelector('.participant1');
    let clone = original.cloneNode(true);
    count++
    clone.querySelector('#count').innerHTML=count
    clone.querySelector('#fname').value = "";
    clone.querySelector('#activity').value = "";
    clone.querySelector('#fee').value = "";
    clone.querySelector('#date').value = "";
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
    const total = totalFees()
    let adultname = document.getElementById('adult_name').value
    let template = successtemplate({name:adultname, fee:total})
    document.getElementById('summary').innerHTML = template

}

function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");  
    feeElements = [...feeElements];
    console.log (feeElements[0].value)
    const total = feeElements.reduce((sum,element) => {
        console.log(element.value)
        console.log(element)
        return sum+parseInt(element.value)
    }, 0)
    return total
}

function successtemplate(info) {
    return `<h1>Thank you ${info.name} for registering. You have registered ${count} participants and owe $${info.fee} in Fees.</h1>`
}

