import format from 'date-fns/format';

var span = document.querySelector('#time-now') as HTMLElement;

export default function update() {
	const date = new Date();
	const str = date?.toDateString();
	span.textContent = format(date, 'h:mm:ssa');
	setTimeout(update, 1000);
}
