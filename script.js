const button = document.querySelector("button")
const bill_amount = document.getElementById("bill_amount")
const tip_percentage = document.getElementById("tip_percentage")
let tip_amount_span = document.getElementById("tip_amount_span")

function clickedButton() {
    if (bill_amount.value == "" || tip_percentage.value == "") {
        alert("Please enter the values")
    } else {
        tip_amount = parseFloat(bill_amount.value) * (parseFloat(tip_percentage.value) / 100)


        console.log(tip_amount)
        total_amount = parseFloat(bill_amount.value) + tip_amount


        tip_amount_span.innerHTML = 'Kes ' + total_amount.toFixed(2)
    } {

    }


}
button.addEventListener("click", clickedButton)