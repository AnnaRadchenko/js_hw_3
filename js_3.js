// для цикла while применяется конструкция else {}?

// Задание 1. Повторять цикл, пока ввод неверен

// 1.1
// работает НО! когда нажимаю ESC первый раз то просит ввести число вновь, хотя должно быть "good".
// со второго раза при нажатии на ESC все работает.

var arg = +prompt("Введите arg больше 100", "");

while(true) {
  var arg = prompt("Введите еще раз arg");

  if(arg > 100 || arg == null) break;
}

alert( "Good!");

//1.2
//в чем тут ошибка?
var arg = +prompt("Введите arg больше 100", "");

do{
   var arg = prompt( "Введите еще раз arg" );
}while{
   arg > 100 || arg == null;
   alert( "Good!");
}

//1.3
//в чем ошибка?

var a = +prompt("Введите число больше 100", "");

function arg(a){
  if (a <= 100){
  	return prompt( "Введите еще раз arg" );
  }else{
  	return a;
}

alert( "Good!");

// Задание 2. Вывести простые числа
//в чем ошибка?

function showPrimes(){
  for(i = 2; i < 10; i++){

    for( b = 2; b < i; b++){
      if(i % b == 0) continue showPrimes();
    }

    console.log(showPrimes()); 
  }
}


// Задание 3. FizzBuzz

var i;
for( i = 0; i<100; i++){
	if(!(i%3)){
		console.log( "Fizz" );
	}else if(!(i%5)){
		console.log( "Buzz" );
	}else{
		console.log(i);
	}
}

// Задание 4. FizzBuzz 2

var i;
for( i = 0; i<100; i++){
	if(!(i%3 || i%5){
		console.log( "FizzBuzz" );
		
	}else{
		console.log(i);
	}
}

// Задание 5. Шахматная доска
// можешь натолкнуть на мысль, возможно здесь что-то дописать/исправить или вообще переделать?

var counter = 0;
var result;
var x = "";
var y = "#";

while (counter < 8) {

    if ((x + y) % 2 == 0){
      result = x+y;
    }else{
      result = y+x;
    }

counter = counter + 1;

}
  
console.log(result);
console.log(result);
console.log(result);
console.log(result);
console.log(result);
console.log(result);
console.log(result);
console.log(result);

// Задание 6. pow
// вроде правильно пишу но не понимаю в чем ошибка?
var result = x;

function pow( x, n ){
	for( x=1; n > x; x++ ){
	result = pow( x*n );
} return result;
}

console.log( pow(3, 2) );