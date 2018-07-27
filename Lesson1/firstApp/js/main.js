function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	document.write("Я владею:" + "<br>");

	function showSkills() {
		let skills = ["HTML", "CSS", "CorelDraw"];

		for (let i = 0; i < skills.length; i++) {
			document.write(skills[i] + "<br>");
		}
	}

	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Тебе " + age + "года! Ого, как много!");
		} else {
			alert("Тебе " + age + "лет! Ух ты, как мало!");
		}
	}
	checkAge("age");

	function calcPow(num) {
		console.log ("Квадрат числа " + num + " равен " + num*num);
	}
	calcPow(4);
}

myFirstApp("Марина", 34);