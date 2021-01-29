
document.getElementById("firstClassIncrease").addEventListener("click", function () {
	handleTicketChange('firstClass', true);
})


document.getElementById("firstClassDecrease").addEventListener("click", function () {
	handleTicketChange('firstClass', false);
})

document.getElementById("economyIncrease").addEventListener("click", function () {
	handleTicketChange('economy', true);
})

document.getElementById("economyDecrease").addEventListener("click", function () {
	handleTicketChange('economy', false);
})

function handleTicketChange(ticket, isIncrease) {
	const ticketInput = document.getElementById(ticket + 'Input');
	const ticketCount = parseInt(ticketInput.value);
	let ticketNewCount = ticketCount;
	if (isIncrease == true) {
		ticketNewCount = ticketCount + 1;
	}
	if (isIncrease == false && ticketCount > 0) {
		ticketNewCount = ticketCount - 1;
	}
	ticketInput.value = ticketNewCount;
	ticketTotal = 0;
	if (ticket == 'economy') {
		ticketTotal = ticketNewCount * 1229;
	}
	if (ticket == 'firstClass') {
		ticketTotal = ticketNewCount * 59;
	}
	document.getElementById(ticket + 'Total').innerText = ticketTotal;

	calculateTotal();

}


function calculateTotal(){
	const firstClassInput = document.getElementById("firstClassInput");
	const firstClassCount = parseInt(firstClassInput.value);

	const economyInput = document.getElementById("economyInput");
	const economyCount = parseInt(economyInput.value);

	const subTotal = firstClassCount * 59 + economyCount * 1229;
	document.getElementById("subTotal").innerText = subTotal;

	const tax = Math.round(subTotal * .1);
	const taxInput = document.getElementById("taxInput");
	taxInput.innerText = tax;

	const grandTotal = subTotal + tax;
	const grandTotalInput = document.getElementById("grandTotal");
	grandTotalInput.innerText = grandTotal;
}
