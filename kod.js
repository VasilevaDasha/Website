
//При нажатии на главной странице на одну из кнопок "Перейти в каталог", он открывается в новом окне
// Получаем элемент button по его идентификатору
var button = document.getElementById('myButton');
// Определяем обработчик событий для кнопки
button.addEventListener('click', function() {
  // Открываем новый HTML-файл в новом окне или вкладке
  window.open('katalog.html', '\_blank');
});


//При заполнении формы на главной странице, данные поступают в консоль:  
// Получаем элемент input по его идентификатору и checkbox
var input1 = document.getElementById('name');
var input2 = document.getElementById('email');
var checkbox = document.getElementById('checkbox');
// Определяем обработчик событий для кнопки
var button = document.getElementById('mybutton');
button.addEventListener('click', function() {
  // Получаем значение из элементов
  var userInput1 = input1.value;
  var userInput2 = input2.value;
  var checkboxState = checkbox.checked;
  // Выводим значения в консоль
  console.log('Имя:'+ userInput1,'Email:'+ userInput2);
  console.log('Согласие на обработку персональных данных:'+ checkboxState);
});


//Считает сколько находимся на сайте и через минуту сообщение выводит на экран
// Функция для подсчета времени
let startTime = Date.now();
function updateTime() {
  const timeElapsed = Date.now() - startTime;
  const seconds = Math.floor((timeElapsed % 60000) / 1000);
  console.log(`Прошло секунд: ${seconds}`);
}
// Функция для отображения сообщения
let displayMessage = false;
function showMessage() {
  if (!displayMessage && (Date.now() - startTime) > 60 * 1000) {
    displayMessage = true;
    alert("Пора уже что-то купить!");
  }
}
// Обновление времени каждую секунду
setInterval(updateTime, 1000);
// Отображение сообщения после 60 секунд
setInterval(showMessage, 60 * 1000); 
