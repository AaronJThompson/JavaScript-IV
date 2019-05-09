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
	constructor({specialty, favLanguage, catchPhrase}) {
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

class Student extends Person {}

class ProjectManager extends Instructor {}
