// VERY HARD: Object prototype chain and prototypal inheritance exercise.
// 1. Create a Person constructor that has three properties: name, job, and age.
// 2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is
// fun! - said no one ever".
// 3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad
// is a back-end developer".
// 4. Create a Programmer constructor that inherits all the members from Person with an additional
// 'languages' property that is passed in and a busy property that is NOT passed in and is set to
// true by default.
// 5. Give the Programmer a 'completeTask' method that updates the busy property on that
// programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the
// busy property on that programmer to be true.
// 6. Give the Programmer an 'offerNewTask' method that console logs one thing if the
// programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't
// accept any new tasks right now." and "Mark would love to take on a new responsibility." if the
// programmer is not busy.
// 7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages
// to the programmer and list off all languages the programmer knows.
// 8. Test it out - can you create different programmers and run all the methods on them? Does
// each programmer maintain their own properties properly and independently of the other
// programmers?

//1
class Person {       //class is like a template for multiple things you want to have
    constructor(name, age, job){    //intitialize. is everything that you want to target later
     this.name=name;    //properties
     this.age=age;
     this.job=job   //this . just a placeholder for oject
    }
    //method
    //2
    exercise(){
        console.log('I go clubbing to burn calories.')
    }
    //another method
    //3
    fetchJob(){
        console.log(`This is ${this.name} and their job is ${this.job}`)
    }
} 
let person01= new Person('Jubilee', 23, 'Software Engineer')
person01.exercise();
person01.fetchJob();

//
//4
class Programmer {
    constructor(name, age, job, languages, busy){
        this.name=name;
        this.age=age;
        this.job=job;
        this.languages=languages;
        this.busy=busy;
    }
    //5
    completeTask() {
    console.log(this.busy);
    }
    //6
    acceptNewTask() {
        console.log(this.busy = true);
    }
    offerNewTask(){
       if (programmer01 = this.busy){
        console.log("Jubilee is going out toniiiight")
    }else console.log("Jubilee is not able to go :( ");
}
//7
     learnLanguage() {
        console.log(this.languages.push('Amaharic', 'Japanese','Chinese','Portugese'));
    }

    listLanguages(){
        console.log('English','Spanish','French','German')
    }
}


let programmer01 = new Programmer('Jubilee',  23, 'Software Engineer',['English','Spanish','French','German'], false)
console.log(programmer01);
programmer01.completeTask();
programmer01.acceptNewTask();
programmer01.learnLanguage();
programmer01.listLanguages();
programmer01.offerNewTask();


let programmer02 = new Programmer ('Brian', 25, 'Artist', true)
console.log(programmer02);
programmer02.acceptNewTask();
programmer02.offerNewTask();
