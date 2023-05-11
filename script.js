// calculateEMI();

function calculateEMI() {
      // console.log("Value changes !!");

        p = document.getElementById("loanAmount").value 
        // console.log(principleAmount);
        r = document.getElementById("roi").value
        // console.log(roiValue);
        n = document.getElementById("tenure").value
        // console.log(tenureEl);

        // totalInterest = (principleAmount * (roiValue / 100)) / tenureEl
        // console.log(totalInterest);

        // emiAmount = ((principleAmount / tenureEl) + roiValue).toFixed(2);
        // console.log(emiAmount);
        parseFloat(p);
        parseFloat(r);
        parseFloat(n);
        totalInterest = (p * (r * 0.01)) / n;
        finalEMI = (p / n + totalInterest).toFixed(2);

        // console.log(princpleWithInterest);

        document.getElementById("resultEMI").innerText = finalEMI
}





