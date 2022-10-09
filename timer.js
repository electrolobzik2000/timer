document.addEventListener('DOMContentLoaded', () => {
	const call = new Date('Nov 11 2022 15:30:00');
	
	const daysValue = document.querySelector('.timer__days .timer__value');
	const hoursValue = document.querySelector('.timer__hours .timer__value');
	const minutesValue = document.querySelector('.timer__minutes .timer__value');
	const secondsValue = document.querySelector('.timer__seconds .timer__value');

	const daysText = document.querySelector('.timer__days .timer__text');
	const hoursText = document.querySelector('.timer__hours .timer__text');
	const minutesText = document.querySelector('.timer__minutes .timer__text');
	const secondsText = document.querySelector('.timer__seconds .timer__text');

	function declOfNum(number, titles) {  
		let cases = [2, 0, 1, 1, 1, 2];  
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
	}

	const timer = () => {
		let now = new Date();
		let leftUntil = call - now;

		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
		let hours = Math.floor(leftUntil / 1000 / 60 / 60 % 24);
		let minutes = Math.floor(leftUntil / 1000 / 60 % 60);
		let seconds = Math.floor(leftUntil / 1000 % 60);

		daysValue.textContent = days;
		hoursValue.textContent = hours;
		minutesValue.textContent = minutes;
		secondsValue.textContent = seconds;

		daysText.textContent = declOfNum (days, ['день', 'дня', 'дней']);
		hoursText.textContent = declOfNum (days, ['час', 'часа', 'часов']);
		minutesText.textContent = declOfNum (days, ['минута', 'минуты', 'минут']);
		secondsText.textContent = declOfNum (days, ['секунда', 'секунды', 'секунд']);
	};

	timer();

	setInterval(timer, 1000);
})