var choose = new Array(20);
for (var i = 0, len = choose.length; i < len; i++) {
	choose[i] = Math.floor(Math.random()*3);
}
var order = 0;
var input = document.getElementsByTagName('input');
for (var i = 0, len = input.length; i < len; i++) {
	if(input[i].type.toUpperCase()=='RADIO'){
		if (choose[Math.floor(order/5)]==order%5) {
			input[i].checked = true;
		}
		order++;
	}
}
saveData(this,'1')

