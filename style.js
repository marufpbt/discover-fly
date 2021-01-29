
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

	calculateTotal();
}


function calculateTotal() {
	const firstClassInput = document.getElementById("firstClassInput");
	const firstClassCount = parseInt(firstClassInput.value);

	const economyInput = document.getElementById("economyInput");
	const economyCount = parseInt(economyInput.value);

	const subTotal = firstClassCount * 150 + economyCount * 100;
	document.getElementById("subTotal").innerText = subTotal;

	const tax = Math.round(subTotal * .1);
	const taxInput = document.getElementById("taxInput");
	taxInput.innerText = tax;

	const grandTotal = subTotal + tax;
	const grandTotalInput = document.getElementById("grandTotal");
	grandTotalInput.innerText = grandTotal;
}
