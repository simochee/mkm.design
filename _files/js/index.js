$(function() {
	genCalendar();
});

const close = [7,14,21,28,19,25];

function genCalendar() {
	const y = d.getFullYear();
	const m = d.getMonth() + 1;
	const days = ~[1,3,5,7,8,10,12].indexOf(m) ? 31 :
				 ~[4,6,9,11].indexOf(m) ? 30 :
				 y % 4 == 0 || (y % 100 == 0 && y % 400 != 0) ? 29 : 28;
	const start = new Date(`${y}-${zero(m)}-01`).getDay();
	let day = 1;
	let html = `
				<div class="year">${y}</div>
				<div class="month">${m}</div>
				<table class="calendar">
					<thead>
						<tr>
							<th>S</th>
							<th>M</th>
							<th>T</th>
							<th>W</th>
							<th>T</th>
							<th>F</th>
							<th>S</th>
						</tr>
					</thead>
					<tbody>
						<tr>
			   `;
	for(let i=0; i<start; i++) {
		html += `<td></td>`;
	}
	for(let i=0; i<7-start; i++) {
		day++;
		html += `<td data-date="${day}">${i+1}</td>`;
	}
	html += `</tr>`;
	for(let end=true; end; ) {
		html += `<tr>`;
		for(let i=0; i<7 && end; i++) {
			day++;
			html += `<td data-date="${day}">${day}</td>`;
			if(day > days) {
				end = false;
				for(let j=0; j<7-i; j++) {
					html += `<td></td>`;
				}
			}
		}
		html += `</tr>`;
	}
	html += `
				</tbody>
			</table>
			<div class="means">
				<span class="holiday">休業日</span>
				<span class="close">営業時間変更</span>
				<div class="details"><a href="/info/open/${y}/${m}/">詳しくはこちらへ</a></div>
			</div>
			`;
	$('#calendar').html(html)
				  .find(`[data-date="${d.getDate()}"]`).addClass('today');

	for(let i=0, len=close.length; i<len; i++) {
		$(`[data-date="${close[i]}"]`).addClass('close')
	}
}