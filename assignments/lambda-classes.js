// CODE here for your Lambda Classes
class Person {
  constructor({ name, age, location, gender }) {
    this.name = name;
    this.age = age;
    this.location = location;
		this.gender = gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
	constructor({name, age, location, gender, specialty, favLanguage, catchPhrase}) {
		super(arguments[0]); //Pass whole object argument to Person constructor
		this.specialty = specialty;
		this.favLanguage = favLanguage;
		this.catchPhrase = catchPhrase;
	}

	demo(subject) {
		console.log(`Today we are learning about ${subject}`);
	}

	grade(student, subject) {
		if(student instanceof Student){
			console.log(`${student.name} receives a perfect score on ${subject}`);
		}
	}

	giveGrade(student) {
		if(student instanceof Student) {
			student.grade += (Math.random() - 0.5) * 40; // Adds number between -20 and 20 to grade
		}
	}
}

class Student extends Person {
	constructor({name, age, location, gender, previousBackground, className, favSubjects}) {
		super(arguments[0]);
		this.previousBackground = previousBackground;
		this.className = className;
		this.favSubjects = favSubjects;
		this.grade = Math.random() * 100;
		this.graduated = false;
	}
	
	listsSubjects() {
		this.favSubjects.forEach(item => console.log(item));
	}

	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}

	sprintChallenge(subject) {
		console.log(`${this.name} has begun sprint challenge on ${subject}`);
	}

	graduate() {
		if(this.graduated) {
			console.log(`${this.name} already graduated!`);
			return;
		}
		if(this.grade > 70) {
			this.graduated = true;
			console.log(`${this.name} just graduated!`);
		} else {
			console.log(`${this.name} needs ${70 - this.grade}% more on their grade to graduate!`);
		}
	}
}

class ProjectManager extends Instructor {
	constructor({name, age, location, gender, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}) {
		super(arguments[0]);
		this.gradClassName = gradClassName;
		this.favInstructor = favInstructor;
	}

	standUp(channel) {
		console.log(`${this.name} announces to ${channel}, @channel standy times!`);
	}

	debugsCode(student, subject) {
		if(student instanceof Student) {
			console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
		}
	}
}

let gabe = new Instructor({
	name: "Gabriel Cabrejas",
	age: 25,
	location: "Spain",
	gender: 'M',
	specialty: "Web Development",
	favLanguage: "Javascript",
	catchPhrase: "I HATE CLASSES IN JAVASCRIPT!",
})

let josh = new Instructor({
	name: "Josh Knell",
	age: 24,
	location: "USA",
	gender: 'M',
	specialty: "Web Development",
	favLanguage: "Less",
	catchPhrase: "Hmmm, something's up!",
})

let aaron = new Student({
	name: "Aaron Thompson",
	age: 20,
	location: "England",
	gender: 'M',
	previousBackground: "Computer Science, Advanced Mathematics",
	className: "WEBEU2",
	favSubjects: ["Preproccessing", "CSS", "Javascript"],
})

let haja = new Student({
	name: "Haja Andriamaro",
	age: 26,
	location: "France",
	gender: 'M',
	previousBackground: "CTO, Business developemnt",
	className: "WEBEU2",
	favSubjects: ["HTML", "CSS", "Javascript"],
})

let sorin = new ProjectManager({
	name: "Sorin Chris",
	age: 23,
	location: "Romania",
	gender: 'M',
	specialty: "Web Development",
	favLanguage: "Java",
	catchPhrase: "Do the forms!",
	gradClassName: "WEBEU1",
	favInstructor: "Josh Knell",
})

let maxime = new ProjectManager({
	name: "Maxime Salomon",
	age: 23,
	gender: 'M',
	location: "Paris",
	specialty: "After Hours",
	favLanguage: "CSS",
	catchPhrase: "Do the form!",
	gradClassName: "WEBEU1",
	favInstructor: "Gabe Cabrejas",
})

haja.speak();
gabe.demo("Javascript I");
josh.grade(aaron, "Preprocessing I");
aaron.listsSubjects();
haja.PRAssignment("Javascript III");
aaron.sprintChallenge("Preprocessing");
sorin.standUp("webeu2_sorin");
maxime.debugsCode(aaron, "User interface II");
sorin.giveGrade(aaron);
aaron.graduate();