// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable
//     Information)that cannot be accessed directly. The object should have at least two properties: name and
//     ssn. Only the name property should be accessible, and it should be called through a public function.
//     The ssn property should not be accessible at all.
//     Creating private objects and private properties helps you control who has access to what data and
//     helps you prevent people who shouldn't see important info like social security numbers from getting
//     access to the data.
//     You can use 'getName' or other get methods to access data that people might need. For example,
//     people addressing a package or email may need a customer's name, but they definitely shouldn't have
//     access to their ssn.

function outerFunction() {
let pii = { //private object
    name: "Sarah Lemma",//properties
    ssn: 123456789,
}
return function getName() { //closure
    return pii.name //return name from private object
 }
}

var closure = outerFunction(); //calling outer that returns the inner
console.log(closure()); //executing the inner function