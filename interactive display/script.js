function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipRadios = document.getElementsByName("tip");
    let tipPercent = 0;

    for (let radio of tipRadios) {
        if (radio.checked) {
            if (radio.value === "custom") {
                const custom = parseFloat(document.getElementById("customTip").value);
                if (!isNaN(custom)) {
                    tipPercent = custom / 100;
                } else {
                    alert("Please enter a valid custom tip percentage.");
                    return;
                }
            } else {
                tipPercent = parseFloat(radio.value);
            }
        }
    }

    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    const tipAmount = billAmount * tipPercent;
    const total = billAmount + tipAmount;
    document.getElementById("result").innerHTML = `
    Tip: $${tipAmount.toFixed(2)}<br>
    Total: $${total.toFixed(2)}
  `;
}