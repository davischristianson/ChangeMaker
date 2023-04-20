var $ = function(id) {
    return document.getElementById(id);
}

function processEntry() {
    var totalCents = $("cents").value;
    totalCents = parseFloat(totalCents);

    // Prevents any decimal values from making it through the program
    if(totalCents % 1 != 0){
        alert("Error. Please enter an integer between 0-99");
    }

    else if(totalCents >= 0 || totalCents <= 99) {
        makeChange(totalCents);
    }
    
    else {
        alert("Error. Please enter an integer between 0-99");
    }
}


/**
 * 
 * @param {*} totalCents The value entered and processed from processEntry
 */
function makeChange(totalCents) {

    // Declares value of quarters, dimes, nickels, and pennies
    var quarters = 25;
    var dimes = 10;
    var nickels = 5;
    var pennies = 1;

    // Calculating total amount of quarters
    quarters = parseInt(quarters);
    quartersTotal = totalCents / quarters;
    // Displays number of quarters in box
    $("quarters").value = parseInt(quartersTotal);
    // Gives remaining change
    totalCents = totalCents % quarters;

    // Calculating total amount of dimes
    dimes = parseInt(dimes);
    dimesTotal = totalCents / dimes;
    // Displays number of quarters in box
    $("dimes").value = parseInt(dimesTotal);
    // Gives remaining change
    totalCents = totalCents % dimes;

    // Calculating total amount of nickels
    nickels = parseInt(nickels);
    nickelsTotal = totalCents / nickels;
    // Displays number of quarters in box
    $("nickels").value = parseInt(nickelsTotal);
    // Gives remaining change
    totalCents = totalCents % nickels;

    // Calculating total amount of pennies
    pennies = parseInt(pennies);
    penniesTotal = totalCents / pennies;
    // Displays number of quarters in box
    $("pennies").value = parseInt(penniesTotal);
    // Gives remaining change
    totalCents = totalCents % pennies;
}