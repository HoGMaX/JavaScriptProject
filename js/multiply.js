
//Элементы формы
let form = document.querySelector("#multiply");
let button = form.querySelector("button");
let result = form.querySelector("#result");
let firstNumber = form.querySelector("input:first-of-type");
let secondNumber = form.querySelector("input:last-of-type");

//проверки для запрета ввода символов в input 
firstNumber.addEventListener('keydown', function(event) {
	// Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		    // Ничего не делаем
		return;
	} else {
		    // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
secondNumber.addEventListener('keydown', function(event) {
	    // Разрешаем: backspace, delete, tab и escape
	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||
		// Разрешаем: Ctrl+A
		(event.keyCode == 65 && event.ctrlKey === true) ||
		// Разрешаем: home, end, влево, вправо
		(event.keyCode >= 35 && event.keyCode <= 39)) {
		
		// Ничего не делаем
		return;
	} else {
		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});

button.onclick = ()=>{
        let mul =firstNumber.value * secondNumber.value;
        result.textContent = mul;
};

// смена цвета и шрифта кнопки по ее нажатию
function btnStyle() {
    let btnStile = document.querySelector("#btnStyle").style;
    btnStile.color = "#eee";
    btnStile.backgroundColor = "#000";
    btnStile.border = "none";
    btnStile.borderRadius = "5px";
    btnStile.padding = "5px 10px";
    btnStile.fontSize = "25px"
    btnStile.fontFamily = "Lato";
};

// отображение даты и времени по нажатию на кнопку
let btnDataTime = document.getElementById("data-time");

btnDataTime.onclick = ()=>{
    let d  = new Date();
    let labelDataTime = document.querySelector(".data-time");
    labelDataTime.textContent=`Текущая дата: ${d.toLocaleDateString()} и время ${d.toTimeString()}`;
};

//заголовок светофор

let isOldTitle = true;
let oldTitel = document.title;
let newTitle = 'Hello Max'
function changeTitel () {
document.title = isOldTitle ? oldTitel : newTitle;
isOldTitle = !isOldTitle;
};
setInterval(changeTitel, 1000);

//Форма с ограничением
let inputChar = document.querySelector("#textarea");
inputChar.onkeyup = (e)=>{
	let maxChar = 25;
	let length_chr = maxChar - inputChar.value.length;
	document.querySelector("#rchars").textContent = `${length_chr} - символов осталось`;
	if (length_chr < 0){
		inputChar.value = inputChar.value.substr(0, maxChar);
		document.querySelector("#rchars").textContent = " 0 - символов осталось";
	}
}

//Добавление стилей к блоку
function changeStyle() {
	//присвоение класса со стилями
	document.querySelector("#some_block").classList.add("new_style");
	//запись стилей напрямую
	let block = document.querySelector("#some_block").style;
	block.color = "#fff";
	block.background = "grey";
	block.fontSize = "1em";
	block.width = "90%";
	block.padding = "5%";
}