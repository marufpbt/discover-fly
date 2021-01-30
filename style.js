function handleTicketChange(ticket, isIncrease) {
	const ticketCount = getInputValue(ticket);
	let ticketNewCount = ticketCount;
	if (isIncrease == true) {
		ticketNewCount = ticketCount + 1;
	}
	if (isIncrease == false && ticketCount > 0) {
		ticketNewCount = ticketCount - 1;
	}
	document.getElementById(ticket + 'Input').value = ticketNewCount;
	calculateTotal();
}


function calculateTotal() {
	const firstClassCount = getInputValue("firstClass");
	const economyCount = getInputValue("economy");
	const subTotal = firstClassCount * 150 + economyCount * 100;
	document.getElementById("subTotal").innerText = subTotal;

	const tax = Math.round(subTotal * .1);
	const taxInput = document.getElementById("taxInput");
	taxInput.innerText = tax;

	const grandTotal = subTotal + tax;
	const grandTotalInput = document.getElementById("grandTotal");
	grandTotalInput.innerText = grandTotal;

	document.getElementById("totalTicektCount").innerText = firstClassCount + economyCount;
	document.getElementById("totalAmountCount").innerText = " $" + grandTotal;
	modal()
}


function getInputValue(ticket) {
	const ticketInput = document.getElementById(ticket + 'Input');
	const ticketCount = parseInt(ticketInput.value);
	return ticketCount;
}


function modal() {
	var modal = document.getElementById("myModal");
	var btn = document.getElementById("bookingBtn");
	var span = document.getElementsByClassName("close")[0];
	btn.onclick = function () {
		modal.style.display = "block";
	}
	span.onclick = function () {
		modal.style.display = "none";
	}
	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}

