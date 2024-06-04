function calculateInterest() {
    let principal = parseFloat(document.getElementById('principal').value);
    let ratestr = document.getElementById('rate').value;
    let time = parseFloat(document.getElementById('time').value);

    let rate = parseFloat(ratestr.replace('%', ''));

    let interest = (principal * rate * time) / 100;

    document.getElementById('result').innerHTML = "Simple Interest: R" + interest.toFixed(2);
}