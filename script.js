document.getElementById("Order").onclick = function () {
    alert("Your food is being processed");
    
    let foodInput = document.getElementById("food").value;
    let drinkInput = document.getElementById("Drink").value;

    
    let foodprice = parseInt(foodInput);
    let drinkprice = parseInt(drinkInput);


    if (isNaN(foodprice) || isNaN(drinkprice)) {
        alert("Please enter valid numbers for food and drink prices.");
        return; 
    }

    let totalPrice = foodprice + drinkprice;

    let discount = 0;

    if (totalPrice > 9 ) {
        alert('OK');
    }

    console.log("Total Price: " + totalPrice);
};