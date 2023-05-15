const otpValue = document.getElementById('otpValue');
const submit = document.getElementById('submit-btn');
submit.addEventListener('click', () => {
	const randomNumber = Math.floor(Math.random() * 100000);
	if (randomNumber > 10000) {
		otpValue.value = randomNumber;
		// console.log(randomNumber);
	}
});
