/*
Write a program to calculate the total price of your phone purchase.
You will keep purchasing phones until you run out of money
in your bank account.  You'll also buy accessories for each phone
as long as your purchase amount is below your mental Spending threshold

After you've calculated your purchase amount , add in the tax
then print out the calculated purchase amount properly formatted

Finally, check the amount against your bank account balance to
see if you can afford it or not 

you should set up some constants for the "tax rate",
"phone price" and "spending threshold"  as well
as a variable for your bank account balance"

you should define functions for calculating the tax and for formatting
the price with a "$" and rounding to two decimal places

Bonus Challenge : Try to incorporate input into this program,
perhaps with the prompt(..)

*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount){
	return amount * TAX_RATE;
}

function formatAmount(amount){
	return "$" + amount.toFixed(2);
}

// keep buying phones while you still have money
while (amount < bank_balance){
	//buy a new phone !
	amount = amount + PHONE_PRICE;

	//can we afford the accessory?
	if (amount < SPENDING_THRESHOLD){
		amount = amount + ACCESSORY_PRICE;
	}
}

//don't forget to pay the goverment, too
amount = amount + calculateTax(amount);

console.log(
	"Your purchase: " + formatAmount(amount)
);

Need to finish wataching solution video tonight 
