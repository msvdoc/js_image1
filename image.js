var image1 = new Image();
//Сохраннение ссылки на функцию. Обработчик onload вызывается после загрузки изображения.
image1.onload = function(){
	//Создание интервала 100 мл сек. для запуска функции move1.
	setInterval(move1, 100);
};
image1.src = "smile1.jpg";
var x = 10;

function move1(){
	if(x < canvas1.width)
		x +=5;
	else
		x = 10;
	//Очищаю холст
	ctx.clearRect(0,0, canvas1.width, canvas1.height);
	//Параметры изображение, х,у, ширина, высота.
	ctx.drawImage(image1,x,10,50,50);
}
