document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("transfer-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const phoneNumber = document.getElementById("phone-number").value;
        const amount = document.getElementById("amount").value;

        if (phoneNumber && amount) {
            console.log("Phone Number:", phoneNumber);
            console.log("Amount:", amount);
            alert("Transfert réussi !");
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });
});
