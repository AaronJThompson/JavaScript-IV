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
}

class Student extends Person {
	constructor({name, age, location, gender, previousBackground, className, favSubjects}) {
		super(arguments[0]);
		this.previousBackground = previousBackground;
		this.className = className;
		this.favSubjects = favSubjects;		
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
