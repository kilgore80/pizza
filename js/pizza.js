// This is the beginning of the function.  I set it up so it would be like how you would order
// a pizza with the size first, type of crust, etc.
// Size
function getReceipt() {
	var text1 = "<h2>Look'n OK?</h2>";
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
    for(var x = 0; x < sizeArray.length; x++) {
    	if (sizeArray[x].checked) {
    		var selectedSize = sizeArray[x].value;
    		document.getElementById("ps").innerHTML = selectedSize;
    		text1 = text1+selectedSize+"<br>";
    	}
    }
    if (selectedSize === "Personal") {
    	sizeTotal = 6;
	} else if (selectedSize === "Medium") {
		sizeTotal = 10;
	} else if (selectedSize === "Large") {
		sizeTotal = 14;
	} else if (selectedSize === "Extra Large") {
		sizeTotal = 16;                         
	}
	
	runningTotal = sizeTotal;
	console.log(selectedSize+" = $"+sizeTotal+".00");
	console.log("size text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCrust(runningTotal,text1);
};
// Crust
function getCrust(runningTotal,text1) {
	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");
	for(var c = 0; c < crustArray.length; c++) {
		if (crustArray[c].checked) {
			var selectedCrust = crustArray[c].value;
			document.getElementById("pc").innerHTML = selectedCrust;
			text1 = text1+selectedCrust+"<br>";	
		}
	}
    	if (selectedCrust === "Stuffed Crust") {
    		crustTotal = 3;
    }

    runningTotal = (runningTotal + crustTotal);
    console.log(selectedCrust+"= $"+crustTotal+".00");
    console.log("crust text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getSauce(runningTotal,text1);
};
// Sauce
function getSauce(runningTotal,text1) {
	var sauceArray = document.getElementsByClassName("sauce");
	for(var s = 0; s < sauceArray.length; s++) {
		if (sauceArray[s].checked) {
			var selectedSauce = sauceArray[s].value;
			document.getElementById("ss").innerHTML = selectedSauce;
			text1 = text1+selectedSauce+"<br>";
		}
	}
	console.log("sauce text1: "+text1);
	console.log("subtotal: $"+runningTotal+".00");
	getCheese(runningTotal,text1);
};
// Cheese
function getCheese(runningTotal,text1) {
	var cheeseTotal = 0;
	var cheeseArray = document.getElementsByClassName("cheese");
    for(var h = 0; h < cheeseArray.length; h++) {
    	if (cheeseArray[h].checked) {
    		var selectedCheese = cheeseArray[h].value;
    		document.getElementById("cc").innerHTML = selectedCheese;
    		text1 = text1+selectedCheese+"<br>";
    	}
    } 
        if (selectedCheese === "Extra Cheese") {
        	cheeseTotal = 3;
    }

    runningTotal = (runningTotal + cheeseTotal);
    console.log(selectedCheese+"= $"+cheeseTotal+".00");
    console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1);
};
//Meat
function getMeat(runningTotal,text1) {
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");
	for(var m = 0; m < meatArray.length; m++) {
		if (meatArray[m].checked) {
			selectedMeat.push(meatArray[m].value);
			console.log("selected meat item: ("+meatArray[m].value+")");
			document.getElementById("pm").innerHTML = selectedMeat;
			text1 = text1+meatArray[m].value+"<br>";
		}
	}
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
    	meatTotal = (meatCount - 1);
    } else {
    	meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meats: "+meatCount);
    console.log(meatCount+"meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00" );
    getVeggie(runningTotal,text1);
};
//Veggie
function getVeggie(runningTotal,text1) {
	var veggieTotal = 0;
	var selectedVeggie = [];
	var veggieArray = document.getElementsByClassName("veggies");
	for(var v = 0; v < veggieArray.length; v++) {
		if (veggieArray[v].checked) {
			selectedVeggie.push(veggieArray[v].value);
			console.log("selected veggie item: ("+veggieArray[v].value+")");
			document.getElementById("pv").innerHTML = selectedVeggie;
			text1 = text1+veggieArray[v].value+"<br>";
		}
	}
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
    	veggieTotal = (veggieCount - 1);
    } else {
    	veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    console.log("total selected veggies: "+veggieCount);
    console.log(veggieCount+"veggies - 1 free veggies = "+"$"+veggieTotal+".00");
    console.log("veggies text1: "+text1);
    console.log("Total: "+"$"+runningTotal+".00");
    document.getElementById("total").innerHTML ="<h1>Total: $"+runningTotal+".00"+"</h1>";
};




















  