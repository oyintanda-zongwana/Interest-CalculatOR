function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let ratestr = document.getElementById('rate').value;
    let time = parseFloat(document.getElementById('time').value);
    // to make sure that only a number is entered; got % remove to be replaced during calculation.
    let rate = parseFloat(ratestr.replace('%', ''));
    //formula for interest
    let interest = (principal * rate * time) / 100;
    //result to be shown
    document.getElementById('result').innerHTML = "Simple Interest: R" + interest.toFixed(2);
}